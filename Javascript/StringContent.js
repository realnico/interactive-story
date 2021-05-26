/* Start of the game */
let contentIntro = {
    start: `
    <div class="bg-1"></div>
    <h1 id="start-title">
    "Every morning you have two choices: Continue to sleep with your <span class="span-title">dreams</span>, or wake up and chase them!"
  </h1>
  <p class="start-text">
    The clock is ticking, your state of dreaming is slowly passing away, and the time has come. What time? Well that all depends on one thing. What is time? You know what, just scratch that... Question for another time. Well either way, the alarm is ticking as i said. Aren´t you going to turn it off?
  </p>
  <div class="choices-btns">
    <button id="1" class="choice" onclick="manipluationSnooze()">Snooze</button>
    <button id="2" class="choice" onclick="manipluationJump()">Jump out of bed</button>
  </div>`,
  snooze: `<div class="bg-2"></div><h1 id="start-title">
  "Lose an hour in the morning, and <br> you will be all day <span class="span-title">hunting</span> for it."
    </h1>
    <p class="start-text">
        Ahhh your a dreamer aren't you? You would rather stay in the dream world, then to live it? Well I see how it is, or as PJ would say it: "It's life." Well, what are you waiting for, go back to sleep.
    </p>
    <div class="choices-btns">
        <button id="1" class="choice" onclick="manipulationSnoozeSleep()">Go to sleep</button>
    </div>`,
    turnOff: `<div class="bg-1"></div><h1 id="start-title">
    "The best way to make your <span class="span-title">dreams</span> come true is to wake up."
  </h1>
  <p class="start-text">
  Wow, a man of culture. Isn't always you meet a guy like that. But, i still cant believe you skipped that dream, that girl was hot. Either way, remember that waking up every day is a blessing, not a privilege. Don't take it for granted buddy. But shower or not?
  </p>
  <div class="choices-btns">
    <button id="1" class="choice" onclick="manipluationEarlyShower()">Take a shower</button>
    <button id="2" class="choice" onclick="manipluationEarlyDontShower()">Don´t take a shower</button>
  </div>`

};

/* The snooze path */
let contentSnooze = {
    sleepMore:`
    <div class="bg-2"></div><h1 id="start-title">"It is never too <span class="span-title">late</span> to be what you might have been, or is it?"</h1>
    <p class="start-text">*clap* *clap* *clap*, well done buddy. Hope that dream was worth it. Well look at that, can you tell me what time it is? That was a rhetorical question my guy, so just shut the fuck up. The clock is fucking 8.15, and when does school start? You never learn, that was also a rhetorical question. It starts at 8.30. So no breakfast for you, just put on some clothes.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeCloth()">Cargo and t-shirt</button>
    <button id="2" class="choice" onclick="manipluationSnoozeCloth()">Jeans and hoodie</button>
    </div>
    `,

    cloth:`
    <div class="bg-3"></div><h1 id="start-title">"Life isn't <span class="span-title">perfect</span> but your outfit can be."</h1>
    <p class="start-text">Hahahaha, that's what you are going to wear? I guess he was right, your choice in clothing is the same as your life choices. Absolute trash. Sorry to say it though, but you know... Someone had to. Now all you have to do, is to get to school. But since you woke up late you can't drive to school. Funny right? So what's it gonna be the subway or the bus?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeSub()">Subway</button>
    <button id="2" class="choice" onclick="manipluationSnoozeBus()">Bus</button>
    </div>`,

    subway:`
    <div class="bg-3"></div><h1 id="start-title">"The problem is not to find the <span class="span-title">answer</span>, it's to face the answer."</h1>
    <p class="start-text">What a fine choice. Still going to be late for school, but not much to do about that. Should we put on some music?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeSubBon()">It's my life - Bon Jovi</button>
    <button id="2" class="choice" onclick="manipluationSnoozeSubMag()">Magic - Coldplay</button>
    </div>`,

    bus:`
    <div class="bg-3"></div><h1 id="start-title">"Sometimes it's good to miss a bus. It <br> might be the <span class="span-title">wrong</span> bus."</h1>
    <p class="start-text">What a fine choice... The bus comes in 4 minutes, so you better start running. Hope you took those running classes you bought earlier. Who am I kidding, of course you didn't.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeBusRun()">Run for the bus</button>
    </div>`
};

/* Snooze path + Bus */
let contentSnoozeBus = {

    run:`
    <div class="bg-4"></div><h1 id="start-title">"ohhhhhh <span class="span-title">shit</span>"</h1>
    <p class="start-text">Wow you didn't learn anything did you? You really thought that was the way to go, didn't you look at the hints? Dumb question I guess. Well, don't just lie there - stop the bleeding with your hand buddy. You really think that guy in the car, is going to help you?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeBusWait()">Wait for the driver</button>
    <button id="2" class="choice" onclick="manipluationSnoozeBusStop()">Stop the bleeding</button>
    </div>`,

    wait:`
    <div class="bg-5"></div><h1 id="start-title">"Don´t depend too much on anyone in this world. Even your <span class="span-title">shadow</span> leaves you when you´re in the dark."</h1>
    <p class="start-text">Hahah would you look at that, the driver ran of. Who would have seen that coming? Easy question, I DID! Either way, i'll see you later buddy. Maybe next time, you won't hit the snooze button?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipulationStart()">Get another chance</button>
    </div>`,

    stopBleeding:`
    <div class="bg-5"></div><h1 id="start-title">"It´s not the good that <span class="span-title">dies</span><br>young, it´s the lucky."</h1>
    <p class="start-text">Buddy, that´s too much to stop. But i like your optimism. Sadly, life doesn´t help people just because they are optimistic. But nice try though, i'll give you another chance, because of your effort.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipulationStart()">Get another chance</button>
    </div>` 
};

/* Snooze path + Subway */
let contentSnoozeSub = {

    bonJovi:`
    <div class="bg-2"></div><h1 id="start-title">"It's my life, it's <span class="span-title">now</span> or never, I ain't gonna live forever."</h1>
    <p class="start-text">Gotta give you some props on your music taste, but either way I guess there is nothing more to then to just look at other people on the subway. It's going to be a long trip to school. So you have a lot of thinking to do, don't you?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeSubWait()">Wait</button>
    </div>`,

    magic:`
    <div class="bg-3"></div><h1 id="start-title">"Call it magic, call it true, I call it <span class="span-title">magic</span> when i'm with you"</h1>
    <p class="start-text">Gotta give you some props on your music taste, but either way I guess there is nothing more to then to just look at other people on the subway. It's going to be a long trip to school. So you have a lot of thinking to do, don't you?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeSubWait()">Wait</button>
    </div>`,

    wait:`
    <div class="bg-4"></div><h1 id="start-title">"Somewhere, something incredible is <span class="span-title">waiting</span> to be know. Or something bad, I don't remember."</h1>
    <p class="start-text">*doors opening* Nice, you know how to walk out of the door. Just start walking to school buddy. Wait a second, who are those guys running towards you? Well I know, I'm just asking you buddy. Ohh you don't remember do you? Guess, it's too late to tell you now. Maybe you should just hide?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationSnoozeSubHide()">Hide</button>
    <button id="2" class="choice" onclick="manipluationSnoozeSubWalk()">Just keep on walking</button>
    </div>`,

    hide:`
    <div class="bg-5"></div><div class="bg-2"></div><h1 id="start-title">"When there is nothing left to hide, there is <span class="span-title">nothing</span> left to seek."</h1>
    <p class="start-text">Ohhh wow. That must have hurt? A little stab in your belly can't be dangeours. Hahah just kidding, you are probably going to die. But who are you to blame? Me? Really? I don't think so buddy, this is all on you. Maybe next time, you shouldn't hit the snooze button. Your lucky I like you, i will give you another chance. Just promise me to not fuck this one up. </p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipulationStart()">Get another chance</button>
    </div>`,

    walk:`
    <div class="bg-5"></div><h1 id="start-title">"We all - in the end - die <span class="span-title">in medias res</span>. In the middle of a story."</h1>
    <p class="start-text">Ohhh wow. That must have hurt? A little stab in your belly can't be dangeours. Hahah just kidding, you are probably going to die. But who are you to blame? Me? Really? I don't think so buddy, this is all on you. Maybe next time, you shouldn't hit the snooze button. Your lucky I like you, i will give you another chance. Just promise me to not fuck this one up. </p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipulationStart()">Get another chance</button>
    </div>`
};

/* Waking up early path */
let contentEarly = {
    takeShower:`
    <div class="bg-1"></div><h1 id="start-title">"Best <span class="span-title">ideas</span> come in the shower."</h1>
    <p class="start-text">Finally a person that enjoys showers, last guy didn´t. May be the reason for that musty smell in the air, who knows? Well I do, so retorichal question. Either way, what are you waiting for - go ahead buddy.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlyShowerNow()">Shower</button>
    </div>`,

    InShower:`
    <div class="bg-1"></div><h1 id="start-title">"Long showers, loud music and <span class="span-title">deep</span> thoughts."</h1>
    <p class="start-text">Did you enjoy that hot shower? Not as hot as the girl in the dream. Haha, I'm going to stop reminding you. Don't just stand there, put some clothes on. I don't have all day, or do I? Question for another time I guess.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlyClothsOn()">Take clothes on</button>
    </div>`,

    dontTakeShower:`
    <div class="bg-2"></div><h1 id="start-title">"Crusty, <span class="span-title">dusty</span> and musty."</h1>
    <p class="start-text">Just like the last guy, what the fuck. What is it with you people and not showering, please don´t tell me your one of those "save the planet" people. I´m not the one to judge, but your the reason i had to wear a mask to school. Well get to work, put some clothes on. I dont have all day, or do I? Question for another time i guess.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlyClothsOn()">Take clothes on</button>
    </div>`,

    clothsOn:`
    <div class="bg-1"></div><h1 id="start-title">"Life isn't <span class="span-title">perfect</span> but your outfit can be."</h1>
    <p class="start-text">What a fine choice in clothes, the last guy had a terrible taste. But you probably already know that don´t you? Again, that was a retorical question, so don´t answer that. ring ring ring, oh shit the phone i calling. Who could that be? Ohh, the person has a unknown number. That´s kinda sketchy.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlyAnswer()">Answer the call</button>
    <button id="2" class="choice" onclick="manipluationEarlyDontAnswer()">Don´t answer the call</button>
    </div>`,

    answerCall:`
    <div class="bg-2"></div><h1 id="start-title"><span class="span-title">People</span> who creates <br><span class="span-title">their</span> own drama, <br><span class="span-title">deserves</span> their own karma.</h1>
    <p class="start-text"></p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlyHangUp()">Hang up</button>
    </div>`,
    hangUp:`
    <div class="bg-3"></div><h1 id="start-title">"Life is to short to be <span class="span-title">normal</span>, embrace the weird."</h1>
    <p class="start-text">Did you feel that? I guess you did,  but do you remember him? Nevermind, scratch that. It was probably nothing, eat some problems, I mean breakfast. You like breakfast don´t you?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlyToastCereal()">Cereal</button>
    <button id="2" class="choice" onclick="manipluationEarlyToastCereal()">Toast</button>
    </div>`,
    
    dontAnswerCall:`
    <div class="bg-4"></div><h1 id="start-title">"The more i think, the <span class="span-title">confused</span> I get</h1>
    <p class="start-text">Your really not going to answer that? Are you sure buddy? I actually couldn´t care less, breakfast?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlyToastCereal()">Cereal</button>
    <button id="2" class="choice" onclick="manipluationEarlyToastCereal()">Toast</button>
    </div>`,

    breakfast:`
    <div class="bg-2"></div><h1 id="start-title">"Breakfast is the most <span class="span-title">important</span> meal of the day."</h1>
    <p class="start-text">Huh. Didn´t expect that. Hope it tastes good at least. By the way, you don´t have all day school is starting in half an hour. Wanna drive to school school or take the subway? </p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlyDrive()">Drive to school</button>
    <button id="2" class="choice" onclick="manipluationEarlySubway()">Take the subway</button>
    </div>`
};

/* Early + Subway */
let contentEarlySub = {
    subway:`
    <div class="bg-2"></div><h1 id="start-title">"The problem is not to find the <span class="span-title">answer</span>, it's to face the answer."</h1>
    <p class="start-text">Excellent. Such a boring choice. All you do on the subway is listening to music, and staring out the window or at your phone. I´m probably just mad, since it wouldn´t be thing i would pick. But you aren´t me... What should we listen to today?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlySubwayEminem()">Not Afraid - Eminem</button>
    <button id="2" class="choice" onclick="manipluationEarlySubwayRip()">Riptide - Vance Joy</button>
    </div>`,

    eminem:`
    <div class="bg-2"></div><h1 id="start-title">"And I just can't keep living this way, So starting <span class="span-title">today</span>, I'm breaking out of this cage."</h1>
    <p class="start-text">Gotta give you some props on your music taste, but either way I guess there is nothing more to then to just look at other people on the subway. It's going to be a long trip to school. So you have a lot of thinking to do, don't you?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlyZone()">Zone out</button>
    </div>`,

    rip:`
    <div class="bg-3"></div><h1 id="start-title">"I can't  have it, I <span class="span-title">can't</span> have it, any other way."</h1>
    <p class="start-text">Gotta give you some props on your music taste, but either way I guess there is nothing more to then to just look at other people on the subway. It's going to be a long trip to school. So you have a lot of thinking to do, don't you?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlyZone()">Zone out</button>
    </div>`,

    zoneOut:`
    <div class="bg-2"></div><h1 id="start-title">"Observe the space between your thoughts, then <span class="span-title">observe</span> the observer."</h1>
    <p class="start-text">Do we have a criminal on our hand? Did you forget to buy a ticket, or just didn´t want to?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlyBuyTicket()">Buy a ticket</button>
    <button id="2" class="choice" onclick="manipluationEarlyDontBuyTicket()">Don´t buy a ticket</button>
    </div>`,

    buyTicket:`
    <div class="bg-2"></div><h1 id="start-title">"Half the time you think your <span class="span-title">thinking</span> you’re actually listening."</h1>
    <p class="start-text">Would you look at that? The control just came on the subway, good thing you bought the ticket. NO FINE FOR YOU! Haha just kidding, well i´m not kidding about the no-fine part, but the screaming. Well this is your stop either way so lets go to school.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlySchool()">Go of the subway</button>
    </div>`,

    dontBuyTicket:`
    <div class="bg-3"></div><h1 id="start-title">"Once you develop that <span class="span-title">'it is what it is'</span> mentality. A lot of stuff stops bothering you."</h1>
    <p class="start-text">So the saying was right; once a criminal always a criminal. Oh would you look at that, the control comes on. Looks like you will get a fine, no point running from it by the way. Your just going to get yourself in more trouble. Your going off on this stop either way. </p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlySchool()">Go of the subway</button>
    </div>`
};

let contentEarlyDrive = {
    driving: `
    <div class="bg-2"></div><h1 id="start-title">"Never drive faster than your guardian <span class="span-title">angel</span> can fly."</h1>
    <p class="start-text">Outstanding choice, nothings better then starting the day with car ride. Just gotta drive out of the drive-way.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlyDriveOut()">Drive out of the garage</button>
    </div>`,

    driveOut: `
    <div class="bg-2"></div><h1 id="start-title">"Your best <span class="span-title">teacher</span>, is your last mistake."</h1>
    <p class="start-text">Oh what was that. Did you crash into something? Hmmm probably nothing, just start driving to school buddy. Should we put on some music?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlyDriveWeak()">Weak - AJR</button>
    <button id="2" class="choice" onclick="manipluationEarlyDriveBlackbear()">Cheateau - Blackbear</button>
    </div>`,

    weak: `
    <div class="bg-3"></div><h1 id="start-title">"No thank you is what i <span class="span-title">should</span> have said, I should be in bed."</h1>
    <p class="start-text">Your music taste is just on point i got to say. We are soon at your school either way. Scratch that, we are here already. Just park in the parking lot.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlySchool()">Park the car</button>
    </div>`,

    blackbear: `
    <div class="bg-2"></div><h1 id="start-title">"Feel like I can't trust <span class="span-title">nobody</span>, even day ones. Wath out for them snake ones."</h1>
    <p class="start-text">Your music taste is just on point i got to say. We are soon at your school either way. Scratch that, we are here already. Just park in the parking lot.</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlySchool()">Park the car</button>
    </div>`
};

let contentSchool = {
    walk:`
    <div class="bg-3"></div><h1 id="start-title">"As you start to walk out on <span class="span-title">the way</span>, the way appears."</h1>
    <p class="start-text">Good thing it isn't far to school. Just a couple of minutes of walking, what more can you ask for. Ohh isn't that your friends. Wondering what they are talking about, they are just chilling in the corner of the campus. So what are you waiting for, aren't you going to say hello?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlySchoolHello()">Give secret hand shake</button>
    <button id="2" class="choice" onclick="manipluationEarlySchoolHello()">Say "What's cooking?"</button>
    </div>`, 

    sayHello:`
    <div class="bg-3"></div><h1 id="start-title">"Life is a matter of choices, and every <span class="span-title">choice</span> you make makes you."</h1>
    <p class="start-text">Wait a minute? Did they just ask you to beat up some guy, or did I hear them wrong? Are you going to join them? He sounds innocent to me, but again what do I know...</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlySchoolYes()">Join them</button>
    <button id="2" class="choice" onclick="manipluationEarlySchoolNo()">Say "No"</button>
    </div>`, 

    joinThem:`
    <div class="bg-4"></div><h1 id="start-title">"May your choices reflect your <span class="span-title">hopes</span>, not your fears."</h1>
    <p class="start-text">Look's like your joining them, are they walking towards the guy? Oh nevermind, the guy was right around the corner. How ironic.. Damn they are just hitting that guy, join them then. Waaaait, doesn't that guy look familiar?</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipluationEarlySchoolStop()">Stop the fight</button>
    </div>`, 
    stopFight:`
    <div class="bg-5"></div><h1 id="start-title">"Life is the <span class="span-title">sum</span> of all your choices."</h1>
    <p class="start-text">
    <span class="span-text">Nox:</span> "Guys stop it, wait a second"<br><br><span class="span-text">Nox V.42:</span> "Ahh so you remember me? It wasn't enough driving over me, beating me up and now you are going to do it again?"<br><br><span class="span-text">Nox:</span> "What are you saying?"<br><br><span class="span-text">Nox V.42:</span> "So he didn't tell you?"<br><br><span class="span-text">Unknown:</span> "Maybe now is a better time then never. Nox this is<br>Nox V.42, i guess you have a lot of catching up to do."</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="manipulationStart()">Play again</button>
    <button id="2" class="choice" onclick="window.location.href='flowchart.html'">Flowchart</button>
    </div>`, 

    sayNo:`
    <div class="bg-5"></div><h1 id="start-title">"Don't base your decisions on the <span class="span-title">advice</span> of those who don't have to deal with the results."</h1>
    <p class="start-text"><span class="span-text">Nox:</span> "That was the right thing to do, right?"<br><br><span class="span-text">Unknown:</span> "Depends, do you remember the phone call?"<br><br><span class="span-text">Nox:</span> "Wait what phone call?" <br><br><span class="span-text">Nox:</span> "Oh no no no no, are you serious?"<br><br><span class="span-text">Unknown:</span> "Karma is a bitch isn't it?"</p>
    <div class="choices-btns"> 
    <button id="1" class="choice" onclick="function()">Play again</button>
    <button id="2" class="choice" onclick="window.location.href='flowchart.html'">Flowchart</button>
    </div>`
};