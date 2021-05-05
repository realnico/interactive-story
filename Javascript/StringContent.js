/* Start of the game */
let contentIntro = {
    start: `<h1 id="start-title">
    "Every morning you have two choices: Continue to sleep with your dreams, or wake up and chase them!"
  </h1>
  <p class="start-text">
    The clock is ticking, your state of dreaming is slowly passing away, and the time has come. What time? Well that all depends on one thing. What is time? You know what, just scratch that... Question for another time. Well either way, the alarm is ticking as i said. Aren´t you going to turn it off?
  </p>
  <div class="choices-btns">
    <button id="1" class="choice" onclick="manipluationSnooze()">Snooze</button>
    <button id="2" class="choice" onclick="manipluationJump()">Jump out of bed</button>
  </div>`,
  snooze: `<h1 id="start-title">
  "Lose an hour in the morning, and <br> you will be all day hunting for it."
    </h1>
    <p class="start-text">
        Ahhh your a dreamer aren't you? You would rather stay in the dream world, then to live it? Well I see how it is, or as PJ would say it: "It's life"
    </p>
    <div class="choices-btns">
        <button id="1" class="choice" onclick="manipulationSnoozeSleep()">Go to sleep</button>
    </div>`,
    turnOff: `<h1 id="start-title">
    "The best way to make your dreams come true is to wake up."
  </h1>
  <p class="start-text">
  Wow, a man of culture. Isn't always you meet a guy like that. But, i still cant believe you skipped that dream, that girl was hot. Either way, remember that waking up every day is a blessing, not a privilege. Don't take it for granted buddy. But shower or not?
  </p>
  <div class="choices-btns">
    <button id="1" class="choice" onclick="manipluationSnooze()">Take a shower</button>
    <button id="2" class="choice" onclick="manipluationJump()">Don´t take a shower</button>
  </div>`

};

/* The snooze path */
let contentSnooze = {
    sleepMore:`
    <h1 id="start-title">"It is never too late to be what you might have been, or is it?"</h1>
    <p class="start-text">*clap* *clap* *clap*, well done buddy. Hope that dream was worth it. Well look at that, can you tell me what time it is? That was a rhetorical question my guy, so just shut the fuck up. The clock is fucking 7.30, and when does school start? You never learn, that was also a rhetorical question. It starts at 8.30. So no breakfast for you, just put on some clothes.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeCloth()">Cargo and t-shirt</button>
    <button id="2" class="choice" onclick="manipluationSnoozeCloth()">Jeans and hoodie</button>
    </div>
    `,

    cloth:`
    <h1 id="start-title">"Life isn't perfect but your outfit can be."</h1>
    <p class="start-text">Hahahaha, that's what you are going to wear? I guess he was right, your choice in clothing is the same as your life choices. Absolute trash. Sorry to say it though, but you know... Someone had to. Now all you have to do, is to get to school. But since you woke up late you can't drive to school. Funny right? So what's it gonna be the subway or the bus?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeSub()">Subway</button>
    <button id="2" class="choice" onclick="manipluationSnoozeBus()">Bus</button>
    </div>`,

    subway:`
    <h1 id="start-title">"The problem is not to find the answer, it's to face the answer."</h1>
    <p class="start-text">What a fine choice. Still going to be late for school, but not much to do about that. Should we put on some music?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeSubBon()">It's my life - Bon Jovi</button>
    <button id="2" class="choice" onclick="manipluationSnoozeSubMag()">Magic - Coldplay</button>
    </div>`,

    bus:`
    <h1 id="start-title">"Sometimes it's good to miss a bus. It <br> might be the wrong bus."</h1>
    <p class="start-text">What a fine choice... The bus comes in 4 minutes, so you better start running. Hope you took those running classes you bought earlier. Who am I kidding, of course you didn't.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeBusRun()">Run for the bus</button>
    </div>`
};

/* Snooze path + Bus */
let contentSnoozeBus = {

    run:`
    <h1 id="start-title">"ohhhhhh shit"</h1>
    <p class="start-text">Wow you didn't learn anything did you? You really thought that was the way to go, didn't you look at the hints? Dumb question I guess. Well, don't just lie there - stop the bleeding with your hand buddy. You really think that guy in the car, is going to help you?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeBusWait()">Wait for the driver</button>
    <button id="2" class="choice" onclick="manipluationSnoozeBusStop()">Stop the bleeding</button>
    </div>`,

    wait:`
    <h1 id="start-title">"Don´t depend too much on anyone in this world. Even your shadow leaves you when you´re in the dark."</h1>
    <p class="start-text">Hahah would you look at that, the driver ran of. Who would have seen that coming? Easy question, I DID! Either way, i'll see you later buddy. Maybe next time, you won't hit the snooze button?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipulationStart()">Get another chance</button>
    </div>`,

    stopBleeding:`
    <h1 id="start-title">"It´s not the good that dies<br>young, it´s the lucky."</h1>
    <p class="start-text">Buddy, that´s too much to stop. But i like your optimism. Sadly, life doesn´t help people just because they are optimistic. But nice try though.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipulationStart()">Get another chance</button>
    </div>` 
};

/* Snooze path + Subway */
let contentSnoozeSub = {

    bonJovi:`
    <h1 id="start-title">"It's my life, it's now or never, I ain't gonna live forever."</h1>
    <p class="start-text">Gotta give you some props on your music taste, but either way I guess there is nothing more to then to just look at other people on the subway. It's going to be a long trip to school. So you have a lot of thinking to do, don't you?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeSubWait()">Wait</button>
    </div>`,

    magic:`
    <h1 id="start-title">"Call it magic, call it true, I call it magic when i'm with you"</h1>
    <p class="start-text">Gotta give you some props on your music taste, but either way I guess there is nothing more to then to just look at other people on the subway. It's going to be a long trip to school. So you have a lot of thinking to do, don't you?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeSubWait()">Wait</button>
    </div>`,

    wait:`
    <h1 id="start-title">"Somewhere, something incredible is waiting to be know. Or something bad, I don't remember."</h1>
    <p class="start-text">*doors opening* Nice, you know how to walk out of the door. Just start walking to school buddy. Wait who are those guys running towards you? Well I know, I'm just asking you buddy. Ohh you don't remember do you? Guess, it's too late to tell you now. Maybe you should hide?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeSubHide()">Hide</button>
    <button id="2" class="choice" onclick="manipluationSnoozeSubWalk()">Just keep on walking</button>
    </div>`,

    hide:`
    <h1 id="start-title">"When there is nothing left to hide, there is nothing left to seek."</h1>
    <p class="start-text">Ohhh wow. That must have hurt? A little stab in your belly can't be dangeours. Hahah just kidding, you are probably going to die. But who are you to blame? Me? Really? I don't think so buddy, this is all on you. Maybe next time, you shouldn't hit the snooze button. Your lucky I like you, i will give you another chance. Just promise me to not fuck this one up. </p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipulationStart()">Get another chance</button>
    </div>`,

    walk:`
    <h1 id="start-title">"We all - in the end - die in medias res. In the middle of a story."</h1>
    <p class="start-text">Ohhh wow. That must have hurt? A little stab in your belly can't be dangeours. Hahah just kidding, you are probably going to die. But who are you to blame? Me? Really? I don't think so buddy, this is all on you. Maybe next time, you shouldn't hit the snooze button. Your lucky I like you, i will give you another chance. Just promise me to not fuck this one up. </p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipulationStart()">Get another chance</button>
    </div>`
};

/* Waking up early path */
let contentEarly = {
    takeShower:`
    <h1 id="start-title">"Best ideas come in the shower."</h1>
    <p class="start-text">Finally a person that enjoys showers, last guy didn´t. May be the reason for that musty smell in the air, who knows? Well I do, so retorichal question. Either way, what are you waiting for - go ahead buddy.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Shower</button>
    </div>`,

    dontTakeShower:`
    <h1 id="start-title">"Crusty, dusty and musty."</h1>
    <p class="start-text">Just like the last guy, what the fuck. What is it with you people and not showering, please don´t tell me your one of those "save the planet" people. I´m not the one to judge, but your the reason i had to wear a mask to school. Well get to work, put some clothes on. I dont have all day, or do I? Question for another time i guess.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Take clothes on</button>
    </div>`,

    clothsOn:`
    <h1 id="start-title">"Life isn't perfect but your outfit can be."</h1>
    <p class="start-text">What a fine choice in clothes, the last guy had a terrible taste. But you probably already know that don´t you? Again, that was a retorical question, so don´t answer that. ring ring ring, oh shit the phone i calling. Who could that be? Ohh, the person has a unknown number. That´s kinda sketchy.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Answer the call</button>
    <button id="2" class="choice" onclick="function()">Don´t answer the call</button>
    </div>`,

    answerCall:`
    <h1 id="start-title">People who creates <br>their own drama, <br>deserves their own karma.</h1>
    <p class="start-text"></p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Hang up</button>
    </div>`,
    hangUp:`
    <h1 id="start-title">"Life is to short to be normal, embrace the weird."</h1>
    <p class="start-text">Did you feel that? I guess you did,  but do you remember him? Nevermind, scratch that. It was probably nothing, eat some problems, I mean breakfast. You like breakfast don´t you?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Cereal</button>
    <button id="2" class="choice" onclick="function()">Toast</button>
    </div>`,
    
    dontAnswerCall:`
    <h1 id="start-title">"The more i think, the confused I get</h1>
    <p class="start-text">Your really not going to answer that? Are you sure buddy? I actually couldn´t care less, breakfast?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Cereal</button>
    <button id="2" class="choice" onclick="function()">Toast</button>
    </div>`,

    breakfast:`
    <h1 id="start-title">"Breakfast is the most important meal of the day."</h1>
    <p class="start-text">Huh. Didn´t expect that. Hope it tastes good at least. By the way, you don´t have all day school is starting in half an hour. Wanna drive to school school or take the subway? </p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Drive to school</button>
    <button id="2" class="choice" onclick="function()">Take the subway</button>
    </div>`
};

/* Early + Subway */
let contentEarlySub = {
    subway:`
    <h1 id="start-title">"The problem is not to find the answer, it's to face the answer."</h1>
    <p class="start-text">Excellent. Such a boring choice. All you do on the subway is listening to music, and staring out the window or at your phone. I´m probably just mad, since it wouldn´t be thing i would pick. But you aren´t me... What should we listen to today?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Ross Capicchioni - Joyner Lucas</button>
    <button id="2" class="choice" onclick="function()">No Role Modelz - J. Cole</button>
    </div>`,

    ross:`
    <h1 id="start-title">"He dapped me up, he started tellin' jokes the whole ride there. Had me crackin' up."</h1>
    <p class="start-text">Gotta give you some props on your music taste, but either way I guess there is nothing more to then to just look at other people on the subway. It's going to be a long trip to school. So you have a lot of thinking to do, don't you?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Zone out</button>
    </div>`,

    noModelz:`
    <h1 id="start-title">"Fool me one time, shame on you. Fool me twice, can´t put the blame on you."</h1>
    <p class="start-text">Gotta give you some props on your music taste, but either way I guess there is nothing more to then to just look at other people on the subway. It's going to be a long trip to school. So you have a lot of thinking to do, don't you?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Zone out</button>
    </div>`,

    zoneOut:`
    <h1 id="start-title">"Observe the space between your thoughts, then observe the observer."</h1>
    <p class="start-text">Do we have a criminal on our hand? Did you forget to buy a ticket, or just didn´t want to?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Buy a ticket</button>
    <button id="2" class="choice" onclick="function()">Don´t buy a ticket</button>
    </div>`,

    buyTicket:`
    <h1 id="start-title">"Half the time you think your thinking you’re actually listening."</h1>
    <p class="start-text">Would you look at that? The control just came on the subway, good thing you bought the ticket. NO FINE FOR YOU! Haha just kidding, well i´m not kidding about the no-fine part, but the screaming. Well this is your stop either way so lets go to school.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Go of the subway</button>
    </div>`,

    dontBuyTicket:`
    <h1 id="start-title">"Once you develop that 'it is what it is' mentality. A lot of stuff stops bothering you."</h1>
    <p class="start-text">So the saying was right; once a criminal always a criminal. Oh would you look at that, the control comes on. Looks like you will get a fine, no point running from it by the way. Your just going to get yourself in more trouble. Your going off on this stop either way. </p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Go of the subway</button>
    </div>`
};

let contentEarlyDrive = {
    driving: `
    <h1 id="start-title">"Never drive faster than your guardian angel can fly."</h1>
    <p class="start-text"></p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Drive out of the garage</button>
    </div>`,

    driveOut: `
    <h1 id="start-title">"Your best teacher, is your last mistake."</h1>
    <p class="start-text">Oh what was that. Did you crash into something? Hmmm probably nothing, just start driving to school buddy. Should we put on some music?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Weak - AJR</button>
    <button id="2" class="choice" onclick="function()">I´ve been waiting - Lil Peep</button>
    </div>`,

    weak: `
    <h1 id="start-title">"No thank you is what i should have said, I should be in bed."</h1>
    <p class="start-text">Your music taste is just on point i got to say. We are soon at your school either way. Scratch that, we are here already. Just park in the parking lot.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Park the car</button>
    </div>`,

    beenWaiting: `
    <h1 id="start-title">"Break my heart but don´t tell me I´m not doing fine. Let me go I´m spending time."</h1>
    <p class="start-text">Your music taste is just on point i got to say. We are soon at your school either way. Scratch that, we are here already. Just park in the parking lot.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()"></button>
    <button id="1" class="choice" onclick="function()">Park the car</button>
    </div>`
};

let contentSchool = {
    walk:`
    <h1 id="start-title">"As you start to walk out on the way, the way appears."</h1>
    <p class="start-text">Good thing it isn't far to school. Just a couple of minutes of walking, what more can you ask for. Ohh isn't that your friends. Wondering what they are talking about, they are just chilling in the corner of the campus. So what are you waiting for, aren't you going to say hello?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Give secret hand shake</button>
    <button id="2" class="choice" onclick="function()">Say "What's cooking?"</button>
    </div>`, 

    sayHello:`
    <h1 id="start-title">"Life is a matter of choices, and every choice you make makes you."</h1>
    <p class="start-text">Wait a minute? Did they just ask you to beat up some guy, or did I hear them wrong? Are you going to join them? He sounds innocent to me, but again what do I know...</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Join them</button>
    <button id="2" class="choice" onclick="function()">Say "No"</button>
    </div>`, 

    joinThem:`
    <h1 id="start-title">"May your choices reflect your hopes, not your fears."</h1>
    <p class="start-text">Look's like your joining them, are they walking towards the guy? Oh nevermind, the guy was right around the corner. How ironic.. Damn they are just hitting that guy, join them then. Waaaait, doesn't that guy look familiar?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Stop the fight</button>
    </div>`, 
    stopFight:`
    <h1 id="start-title"></h1>
    <p class="start-text">
    (Your name): "Guys stop it, wait a second"<br>(Your name Version 42): "Ahh so you remember me? It wasn't enough driving over me, beating me up and now you are going to do it again?"<br>(Your name): "What are you saying?"<br>(Your name Version 42): "So he didn't tell you?"<br>(Unknown): "Maybe now is a better time then never. (Your name) this is (Your name Version 42), i guess you have a lot of catching up to do."</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()"></button>
    <button id="2" class="choice" onclick="function()"></button>
    </div>`, 

    sayNo:`
    <h1 id="start-title">"Don't base your decisions on the advice of those who don't have to deal with the results."</h1>
    <p class="start-text">(Your name): "That was the right thing to do, right?"<br>(Unknown): "Depends, do you remember the phone call?"<br>(Your name): "Wait what phone call?" <br>(Your name): "Oh no no no no, are you serious?"<br>(Unknown): "Karma is a bitch isn't it?"</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()"></button>
    <button id="2" class="choice" onclick="function()"></button>
    </div>`, 
    sayNo:`
    <h1 id="start-title"></h1>
    <p class="start-text"></p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()"></button>
    <button id="2" class="choice" onclick="function()"></button>
    </div>`, 
};





/*subway:`
<h1 id="start-title"></h1>
<p class="start-text"></p>
<div class="choices-btns"> 
<button id="1" class="choice" onclick="function()"></button>
<button id="2" class="choice" onclick="function()"></button>
</div>`, */