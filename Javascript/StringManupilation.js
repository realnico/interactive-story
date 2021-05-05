let section = document.getElementById("start-intro");
let firstButton = document.getElementsByClassName("btn-continue");

/* Intro function */
function manipulationStart() {
    section.innerHTML = contentIntro.start;
};
function manipluationSnooze() {
    section.innerHTML = contentIntro.snooze;
};
function manipluationJump() {
    section.innerHTML = contentIntro.turnOff;
};

/* Snooze path */
function manipulationSnoozeSleep() {
    section.innerHTML = contentSnooze.sleepMore;
};
function manipluationSnoozeCloth() {
    section.innerHTML = contentSnooze.cloth;
};
function manipluationSnoozeSub() {
    section.innerHTML = contentSnooze.subway;
};
function manipluationSnoozeBus() {
    section.innerHTML = contentSnooze.bus;
};

/* Snooze + bus */
function manipluationSnoozeBusRun() {
    section.innerHTML = contentSnoozeBus.run;
};
function manipluationSnoozeBusWait() {
    section.innerHTML = contentSnoozeBus.wait;
};
function manipluationSnoozeBusStop() {
    section.innerHTML = contentSnoozeBus.stopBleeding;
};

/* Snooze + subway */
function manipluationSnoozeSubBon() {
    section.innerHTML = contentSnoozeSub.bonJovi;
};
function manipluationSnoozeSubMag() {
    section.innerHTML = contentSnoozeSub.magic;
};
function manipluationSnoozeSubWait() {
    section.innerHTML = contentSnoozeSub.wait;
};
function manipluationSnoozeSubHide() {
    section.innerHTML = contentSnoozeSub.hide;
};
function manipluationSnoozeSubWalk() {
    section.innerHTML = contentSnoozeSub.walk;
};