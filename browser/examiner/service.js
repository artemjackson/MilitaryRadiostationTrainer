"use strict";

export default class ExaminerService {
    constructor(radiostation, $mdDialog, $timeout) {
        this.radiostation = radiostation;
        this.dialog = $mdDialog;
        this.timeout = $timeout;

        this.reset();
    }

    reset() {
        const self = this;
        this.errorsNumber = 0;
        this.steps = [
            {
                id: "radiostation-step1.0",
                instruction: "Тумблер ПИТАНИЕ перевести в верхнее положение ВКЛ.",
                test () {
                    return this.toggles.power.isEnabled;
                }
            },
            {
                id: "radiostation-step2.0",
                instruction: "Тумблером ШКАЛА включить освещение оптической шкалы.",
                test () {
                    return this.toggles.scale.isEnabled;
                }
            },
            {
                id: "radiostation-step3.0",
                instruction: "Переключатель контроль напряжений поставить в положение РАБОТА 1.",
                test ()  {
                    return this.knobControls.voltage.alias === "РАБОТА 1";
                }
            },
            {
                id: "radiostation-step3.1",
                instruction: "Корректор установить в положение СИМПЛЕКС",
                test ()  {
                    return this.knobControls.corrector.alias === "СИМПЛЕКС";
                }
            },
            {
                id: "radiostation-step4.0",
                instruction: "Ручкой громкость установить необходимую громкость сигналов и шумов (при настройке лучше максимальную, затем можно уменьшить).",
                test () {
                    return this.knobControls.volume.value >= 50;
                }
            },
            {
                id: "radiostation-step4.1",
                instruction: "Ручкой шумы установить необходимый установку шумов (при настройке лучше минимальную, затем можно увеличить).",
                test () {
                    return this.knobControls.noise.value <= 40;
                }
            },
            {
                id: "radiostation-step5.0",
                instruction: "Переключатель ФИКСИР.ЧАСТОТЫ поставить в положение 1 и дождаться прекращения вращения ручек УСТАНОВКА ЧАСТОТЫ и НАСТРОЙКА АНТЕННЫ.",
                test () {
                    return this.knobControls.fixedFrequencies.alias === "1-я";
                }
            },
            {
                id: "radiostation-step6.0",
                instruction: "Тумблером под лампой 1 в зависимости от значения рабочей частоты установить первый(20 - 37,75 МГц) либо второй(35,75 - 51,5 МГц) поддиапазон.",
                test () {
                    return this.toggles.frequency1range1.isEnabled;
                }
            },
            {
                id: "radiostation-step7.0",
                instruction: "Открыть крышку, закрывающую доступ к фиксаторам частот.",
                test () {
                    return this.lock.isOpened;
                }
            },
            {
                id: "radiostation-step7.1",
                instruction: "Расфиксировать фиксатор частоты 1, для чего колпачек специальной отверткой 1 повернуть против хода часовой стрелки примерно на 90\u00B0.",
                test ()  {
                    return this.reel.screw1.value === 1;
                }
            },
            {
                id: "radiostation-step7.2",
                instruction: "Ручкой УСТАНОВКА ЧАСТОТЫ установить по шкале рабочую частоту (отсчет вести с учетом шага между рисками 25МГц)",
                test () {
                    return this.knobControls.frequency.value === this.desiredFrequency;
                }
            },
            {
                id: "radiostation-step7.3",
                instruction: "Зафиксировать фиксатор частоты 1, для чего колпачек специальной отверткой 1 повернуть по ходу часовой стрелки примерно на 90\u00B0.",
                test ()  {
                    removeStep('radiostation-step7.1');
                    return this.reel.screw1.value === 0;
                }
            },
            {
                id: "radiostation-step7.4",
                instruction: "Закрыть крышку, закрывающую доступ к фиксаторам частот.",
                test () {
                    removeStep('radiostation-step7.0');
                    return !this.lock.isOpened;
                }
            },
            {
                id: "radiostation-step8.0",
                instruction: "Перевести тангенту нагрудного переключателя в положение ПРД",
                test () {
                    return this.ptt.isEnabled;
                }
            },
            {
                id: "radiostation-step9.0",
                instruction: "Вращением ручки НАСТРОЙКА АНТЕНЫ отыскать наибольшее откланеие стрелки или самое яркое свечение индикаторной лампочки",
                test () {
                    if(Math.abs(this.knobControls.antennaTuner.value - this.desiredAntenna) <= 5) {
                        self.timeout(() => self.showModalDialog(), 1000);
                        return true;
                    }
                }
            },
            {
                id: "radiostation-step10.0",
                instruction: "Задание выполнено",
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
        return step.test.apply(this.radiostation);
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
