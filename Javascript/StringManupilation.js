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



/* Early path */
function manipluationEarlyShower() {
    section.innerHTML = contentEarly.takeShower;
};
function manipluationEarlyDontShower() {
    section.innerHTML = contentEarly.dontTakeShower;
};
function manipluationEarlyShowerNow() {
    section.innerHTML = contentEarly.InShower;
};
function manipluationEarlyClothsOn() {
    section.innerHTML = contentEarly.clothsOn;
};
function manipluationEarlyAnswer() {
    section.innerHTML = contentEarly.answerCall;
};
function manipluationEarlyHangUp() {
    section.innerHTML = contentEarly.hangUp;
};
function manipluationEarlyDontAnswer() {
    section.innerHTML = contentEarly.dontAnswerCall;
};
function manipluationEarlyToastCereal() {
    section.innerHTML = contentEarly.breakfast;
};

/* Early + Subway */
function manipluationEarlySubway() {
    section.innerHTML = contentEarlySub.subway;
};
function manipluationEarlySubwayEminem() {
    section.innerHTML = contentEarlySub.eminem;
};
function manipluationEarlySubwayRip() {
    section.innerHTML = contentEarlySub.rip;
};
function manipluationEarlyZone() {
    section.innerHTML = contentEarlySub.zoneOut;
};
function manipluationEarlyBuyTicket() {
    section.innerHTML = contentEarlySub.buyTicket;
};
function manipluationEarlyDontBuyTicket() {
    section.innerHTML = contentEarlySub.dontBuyTicket;
};

/* Early + Subway */
function manipluationEarlyDrive() {
    section.innerHTML = contentEarlyDrive.driving;
};
function manipluationEarlyDriveOut() {
    section.innerHTML = contentEarlyDrive.driveOut;
};
function manipluationEarlyDriveWeak() {
    section.innerHTML = contentEarlyDrive.weak;
};
function manipluationEarlyDriveBlackbear() {
    section.innerHTML = contentEarlyDrive.blackbear;
};



/* Early + School */
function manipluationEarlySchool() {
    section.innerHTML = contentSchool.walk;
};
function manipluationEarlySchoolHello() {
    section.innerHTML = contentSchool.sayHello;
};
function manipluationEarlySchoolYes() {
    section.innerHTML = contentSchool.joinThem;
};
function manipluationEarlySchoolStop() {
    section.innerHTML = contentSchool.stopFight;
};
function manipluationEarlySchoolNo() {
    section.innerHTML = contentSchool.sayNo;
};