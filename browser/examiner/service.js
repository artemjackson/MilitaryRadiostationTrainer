"use strict";

export default class ExaminerService {
    constructor(t121, b44, $mdDialog, $timeout) {
        this.t121 = t121;
        this.b44 = b44;
        this.dialog = $mdDialog;
        this.timeout = $timeout;
        const self = this;

        this.reset();
    }

    reset() {
        const self = this;
        this.errorsNumber = 0;
        this.steps = [
            {
                id: "t121-step1.0",
                instruction: "На ПУ ГКУ потецниометром УСТАНОВКА ШИРОТЫ установить значение широты точки стояния, взятое с карты.",
                test () {
                    return this.knobControls.latitude.value === this.formularyValues.latitude
                }
            },
            {
                id: "t121-step2.0",
                instruction: "Проверить установку формулярных значений потенциометра ПОПРАВКА НА ТРЕНИЕ(верхний), при необходимости выставить их значения.",
                test ()  {
                    return this.knobControls.frictionErrorPositive.value === this.formularyValues.frictionErrorPositive
                }
            },
            {
                id: "t121-step2.1",
                instruction: "Проверить установку формулярных значений потенциометра ПОПРАВКА НА ТРЕНИЕ(нижний), при необходимости выставить их значения.",
                test () {
                    return this.knobControls.frictionErrorNegative.value === this.formularyValues.frictionErrorNegative
                }
            },
            {
                id: "t121-step3.0",
                instruction: "Проверить установку формулярного значения потенциометра ЭЛ.БАЛАНСИРОВКА при необходимости выставить формулярное значение.",
                test () {
                    return this.knobControls.balance.value === this.formularyValues.balance
                }
            },
            {
                id: "t121-step4.0",
                get instruction() {
                    return self.t121.isHeatingNeeded ? "Включить тумблер обогрев, если температура окружающей среды ниже 0 градусов." : "Отключить тумблер обогрева";
                },
                test ()
                {
                    return this.isHeatingNeeded ? this.toggles.heating.isEnabled : !this.toggles.heating.isEnabled;
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
                instruction: "Тумблер РАБОТА - СТОПОР установить в положение РАБОТА.",
                test ()  {
                    return this.toggles.work.isEnabled
                }
            },
            {
                id: "t121-step7.0",
                instruction: "Включить тумблер КОНТРОЛЬ.",
                test () {
                    return this.toggles.control.isEnabled
                }
            },
            {
                id: "t121-step8.0",
                instruction: "Включить тумблер ГИРОСКОП.",
                test () {
                    return this.toggles.gyroscope.isEnabled
                }
            },
            {
                id: "t121-step9.0",
                instruction: "Зафиксировать время включения тумблера ГИРОСКОП.",
                test() {
                    return this.toggles.gyroscope.enabledTime
                }
            },
            {
                id: "t121-step10.0",
                instruction: "Перейти к КП-4.",
                test() {
                    return true;
                }
            },
            {
                id: "b44-step1.0",
                instruction: "Выставить карту на КП-4.",
                test() {
                    return this.isMapSetted;
                }
            },
            {
                id: "b44-step2.0",
                instruction: "На карте, с помощью ручек боковых панелей КП-4, установить карандаш в начало квадрата места стояния машины.",
                test() {
                    const error = 50;
                    const errorX = Math.abs(this.pencil.x.value - rounded(this.coordinates.x));
                    const errorY = Math.abs(this.pencil.y.value - rounded(this.coordinates.y));

                    return errorX < error && errorY < error;
                }
            },
            {
                id: "b44-step3.0",
                instruction: "На левой боковой панели КП-4 выставить масташ соответствующий мастшабу карты.",
                test() {
                    return this.scale === "1 : 50000";
                }
            },
            {
                id: "b44-step4.0",
                instruction: "Открыть защитную крышку счетчика КООРДИНАТЫ X.",
                test() {
                    return this.buttonsHandlers.x.isOpened;
                }
            },
            {
                id: "b44-step5.0",
                instruction: "Открыть защитную крышку счетчика КООРДИНАТЫ Y.",
                test() {
                    return this.buttonsHandlers.y.isOpened;
                }
            },
            {
                id: "b44-step6.0",
                instruction: "Выставить значение счетчика КООРДИНАТЫ X в соответствии с координатой X карандаша на карте.",
                test() {
                    return this.counters.x === rounded(this.coordinates.x);
                }
            },
            {
                id: "b44-step7.0",
                instruction: "Выставить значение счетчика КООРДИНАТЫ Y в соответствии с координатой Y карандаша на карте.",
                test() {
                    return this.counters.y === rounded(this.coordinates.y);
                }
            },
            {
                id: "b44-step8.0",
                instruction: "Закрыть защитную крышку счетчика КООРДИНАТЫ Y.",
                test() {
                    removeStep("b44-step5.0");
                    return !this.buttonsHandlers.y.isOpened;
                }
            },
            {
                id: "b44-step9.0",
                instruction: "Закртыь защитную крышку счетчика КООРДИНАТЫ X.",
                test() {
                    removeStep("b44-step4.0");
                    return !this.buttonsHandlers.x.isOpened;
                }
            },
            {
                id: "b44-step10.0",
                instruction: "Открыть защитную крышку счетчика ПУТЬ.",
                test() {
                    return this.buttonsHandlers.path.isOpened;
                }
            },
            {
                id: "b44-step11.0",
                instruction: "Выставить значение счетчика ПУТЬ ровное нулю.",
                test() {
                    return this.counters.path === 0;
                }
            },
            {
                id: "b44-step12.0",
                instruction: "Закрыть защитную крышку счетчика ПУТЬ.",
                test() {
                    removeStep("b44-step10.0");
                    return !this.buttonsHandlers.path.isOpened;
                }
            },
            {
                id: "b44-step13.0",
                instruction: "С помощью ручек передней панели КП-4 довести значения счетчиков КООРДИНАТ X и Y до значений координат X и Y места стояния машины",
                test() {
                    removeStep("b44-step2.0");
                    removeStep("b44-step6.0");
                    removeStep("b44-step7.0");
                    return this.counters.x === this.coordinates.x && this.counters.y === this.coordinates.y;
                }
            },
            {
                id: "b44-step14.0",
                instruction: "Установить дирекционный угол на КП в соответствии с дирекционным углом оси машины",
                test() {
                    return this.rightAngle.value == this.angle.value;
                }
            },
            {
                id: "b44-step15.0",
                instruction: "Установить КОЭФ. КОРР. в соответствии с формулярными значениями КОЭФ. КОРР. для ДДС",
                test() {
                    return this.rightCorrection === this.correction;
                }
            },
            {
                id: "b44-step16.0",
                instruction: "Переключить тумблер ПУТЬ в положение ВКЛ",
                test() {
                    return this.path === "ВКЛ";
                }
            },
            {
                id: "b44-step17.0",
                instruction: "Зафиксировать время окончания работы",
                test() {
                    if (this.finishedTime) {
                        self.showModalDialog();
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                id: "b44-step17.0",
                instruction: "",
                test() {
                    return true;
                }
            }
        ];

        function removeStep(stepId) {
            self.steps.forEach((element)=> {
                if (element.id == stepId) {
                    element.test = ()=> {
                        return true
                    };
                }
            });
        }

        function rounded(value) {
            return Math.floor(value / 1000) * 1000;
        }

        this.currentStep = this.steps[0];
        this.nextStep = this.steps[1];
    }


    nextStepTo(stepId) {
        this.timeout(()=> {
            if (this.currentStep.id === stepId) {
                if (this.isStepTestSuccess(this.currentStep)) {
                    this.updateCurrentStep();
                    this.updateNextStep();
                }
            }
        });
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
        //return true;
        if (step.id.indexOf("t121") !== -1) {
            return step.test.apply(this.t121);
        } else {
            return step.test.apply(this.b44);
        }
    }

    testAllBefore(stepId) {
        let i = 0;
        let step = this.steps[i];

        while (step.id !== stepId) {
            if (!this.isStepTestSuccess(step)) {
                this.errorsNumber++;
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

    showModalDialog() {
        let alert = this.dialog.alert()
            .title("Тренировка окончена!")
            .content("Количество ошибок: " + this.errorsNumber)
            .ok('Закрыть');

        this.dialog
            .show(alert)
            .finally(function () {
                alert = undefined;
            });
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
