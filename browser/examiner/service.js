"use strict";

export default class ExaminerService {
    constructor(t121, $mdDialog) {
        this.t121 = t121;
        this.dialog = $mdDialog;

        this.reset();
    }

    reset() {
        this.steps = [
            {
                id: "t121-step1.0",
                instruction: "На ПУ ГКУ потецниометром УСТАНОВКА ШИРОТЫ установить значение широты точки стояния, взятое с катры",
                test () {
                    return this.knobControls.latitude.value === this.formularyValues.latitude
                }
            },
            {
                id: "t121-step2.0",
                instruction: "Проверить установку формулярных значений потенциометра ПОПРАВКА НА ТРЕНИЕ(верхний), при необходимости выставить их значения",
                test ()  {
                    return this.knobControls.frictionErrorPositive.value === this.formularyValues.frictionErrorPositive
                }
            },
            {
                id: "t121-step2.1",
                instruction: "Проверить установку формулярных значений потенциометра ПОПРАВКА НА ТРЕНИЕ(нижний), при необходимости выставить их значения",
                test () {
                    return this.knobControls.frictionErrorNegative.value === this.formularyValues.frictionErrorNegative
                }
            },
            {
                id: "t121-step3.0",
                instruction: "Проверить установку формулярного значения потенциометра ЭЛ.БАЛАНСИРОВКА при необходимости выставить формулярное значение",
                test () {
                    return this.knobControls.balance.value === this.formularyValues.balance
                }
            },
            {
                id: "t121-step4.0",
                instruction: "Включить тумблер обогрев, если температура окружающей среды ниже 0 градусов.",
                test () {
                    return this.toggles.heating.isEnabled
                }
            },
            {
                id: "t121-step5.0",
                instruction: "Включить тумблем ПРЕОБРАЗОВ.",
                test () {
                    return this.toggles.transformer.isEnabled
                }
            },
            {
                id: "t121-step6.0",
                instruction: "Тумблер РАБОТА - СТОПОР установить в положение РАБОТА",
                test ()  {
                    return this.toggles.work.isEnabled
                }
            },
            {
                id: "t121-step7.0",
                instruction: "Включить тумблер КОНТРОЛЬ",
                test () {
                    return this.toggles.control.isEnabled
                }
            },
            {
                id: "t121-step8.0",
                instruction: "Включить тумблер ГИРОСКОП",
                test () {
                    return this.toggles.gyroscope.isEnabled
                }
            },
            {
                id: "t121-step9.0",
                instruction: "Зафиксировать время включения тумблера ГИРОСКОП",
                test() {
                    return this.toggles.gyroscope.enabledTime
                }
            },
            {
                id: "t121-step10.0",
                instruction: "Перейти к КП-4 (1В44)",
                test() {
                    return true;
                }
            },
            {
                id: "b44-step1.0"
            }
        ];

        this.currentStep = this.steps[0];
        this.nextStep = this.steps[1];
    }

    nextStepTo(stepId) {
        if (this.currentStep.id === stepId) {
            if (this.isStepTestSuccess(this.currentStep)) {
                this.updateCurrentStep();
                this.updateNextStep();
            }
        }
    }

    updateCurrentStep() {
        this.currentStep = this.nextStep;
    }

    updateNextStep() {
        const nextStepIndex = this.steps.indexOf(this.nextStep);
        const updatedNextStepIndex = nextStepIndex + 1;

        this.nextStep = this.steps[updatedNextStepIndex];
    }

    isStepTestSuccess(step) {
        return step.test.apply(this.t121);
    }

    testAllBefore(stepId) {
        let i = 0;
        let step = this.steps[i];

        while (step.id !== stepId) {
            if (!this.isStepTestSuccess(step)) {
                this.showAlert(step.instruction);
                return false;
            }
            ++i;
            step = this.steps[i];
        }

        return true;
    }

    isTrainingMode() {
        return this.mode === 'training';
    }

    showAlert(instruction) {
        let alert = this.dialog.alert()
            .title("\u26A0 Неверное действие! \u26A0")
            .content("Необходимо выполнить шаг:<br/>" + instruction)
            .ok('Продолжить');

        this.dialog
            .show(alert)
            .finally(function () {
                alert = undefined;
            });
    }
}
