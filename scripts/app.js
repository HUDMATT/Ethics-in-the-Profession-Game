let utilitarianAnswers = 0;
let deontologicalAnswers = 0;

updateUtilitarian = function() {
    utilitarianAnswers++;
}
updateDeontological = function() {
    deontologicalAnswers++;
}

function typeEffect(element, text, callback) {
    element.innerHTML = '';
    let i = 0;
    let skipAnimation = false;
    setTimeout(() => {
        const skipHandler = () => {
            skipAnimation = true;
            element.innerHTML = text + '<span class="typing-cursor"></span>';
            if (callback) callback();
            document.removeEventListener('click', skipHandler);
        };
        
        document.addEventListener('click', skipHandler);
    }, 500);
    let timer = setInterval(function() {
        if (skipAnimation) {
            clearInterval(timer);
            return;
        }
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span class="typing-cursor"></span>';
            i++;
        } else {
            clearInterval(timer);
            element.innerHTML = text + '<span class="typing-cursor"></span>';
            document.removeEventListener('click', skipHandler);
            if (callback) callback();
        }
    }, 25);
}

function startGame() {
    utilitarianAnswers = 0;
    deontologicalAnswers = 0;
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("coontinue").innerHTML = "Continue";
    document.getElementById("continue").style.display = "none";
    document.getElementById("scenario").style.display = "block";
    typeEffect(document.getElementById("scenarioText"), 
      "On the way to work you hear yelling. You run towards the noise and you find yourself at a railway switch, your hands trembling. A runaway trolley is speeding down the tracks, and you have only seconds to act."
      + " Ahead, five people are tied to the main track, unable to move. If you do nothing, the trolley will hit them."
      + " But there is a lever beside you. If you pull it, the trolley will switch to a side track—where one person is tied down."
      + " Your heart pounds. The weight of this decision is on you. What do you do? ", function() {
        document.getElementById("choice1").innerHTML = "Pull the lever to switch the trolley onto the side track, sacrificing one person to save five.";
        document.getElementById("choice2").innerHTML = "Refuse to pull the lever and let events unfold naturally, believing it is wrong to actively participate in killing someone.";
        document.getElementById("choice1").onclick = utilitarian1;
        document.getElementById("choice2").onclick = deontological1;
        document.getElementById("choice1").style.display = "block";
        document.getElementById("choice2").style.display = "block";
        document.getElementById("choice1").classList.add("fade-in");
        document.getElementById("choice2").classList.add("fade-in");
    });
}

function utilitarian1() {
    updateUtilitarian();
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    typeEffect(document.getElementById("scenarioText"), 
        "You pull the lever. The trolley switches tracks and the five people are saved. The one person on the side track is hit by the trolley and dies."
        + " You saved five lives at the cost of one. You feel a sense of relief, knowing that you made the right choice.", function() {
    document.getElementById("continue").style.display = "block";
    document.getElementById("continue").onclick = scenario2;
    document.getElementById("continue").classList.add("fade-in");
    });
}

function deontological1() {
    updateDeontological();
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    typeEffect(document.getElementById("scenarioText"), 
        "You refuse to pull the lever. The trolley continues on its path and hits the five people tied to the main track."
        + " You feel a sense of guilt and sorrow for the lives lost, but you believe it is wrong to actively participate in killing someone, even if it means saving more lives.", function() {
    document.getElementById("continue").style.display = "block";
    document.getElementById("continue").onclick = scenario2;
    document.getElementById("continue").classList.add("fade-in");
});
}
  
function scenario2() {
    document.getElementById("continue").style.display = "none";
    typeEffect(document.getElementById("scenarioText"), 
        "You walk away from the railway switch, the weight of your decision still heavy on your mind."
        + " Shortly after, continuing on your path to work you find yourself on a bridge overlooking a trolley track. The same runaway trolley is speeding toward five people tied to the rails below."
        + " This time, there is no switch, no alternate track—but you are not alone. Standing next to you is a large man, leaning slightly over the railing."
        + " You realize that if you push him off the bridge, his body would stop the trolley, saving the five people. However, he would die instantly from the impact."
        + " He doesn’t know what’s about to happen. He trusts you. What do you do? ", function() {
    document.getElementById("choice1").innerHTML = "Push the man off the bridge to stop the trolley and save the five people.";
    document.getElementById("choice2").innerHTML = "Do nothing and let events take their course, refusing to take an action that directly kills someone.";
    document.getElementById("choice1").onclick = utilitarian2;
    document.getElementById("choice2").onclick = deontological2;
    document.getElementById("choice1").style.display = "block";
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice1").classList.add("fade-in");
    document.getElementById("choice2").classList.add("fade-in");
});
}

function utilitarian2() {
    updateUtilitarian();
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    typeEffect(document.getElementById("scenarioText"), 
        "You take a deep breath and push the man off the bridge. He falls onto the tracks, and the trolley collides with him, coming to a halt."
        + " The five people tied to the rails are saved. Their families will never know how close they came to death."
        + " But the man you pushed had a family too. His sacrifice was not his choice. You feel a mix of relief and guilt."
        + " You did what was best for the greatest number, but at what cost?", function() {
    document.getElementById("continue").style.display = "block";
    document.getElementById("continue").onclick = scenario3;
    document.getElementById("continue").classList.add("fade-in");
});
}

function deontological2() {
    updateDeontological();
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    typeEffect(document.getElementById("scenarioText"), 
        "You stand frozen, refusing to push the man. You know that deliberately killing an innocent person is wrong, no matter the outcome."
        + " The trolley speeds forward, smashing into the five people tied to the tracks. Their screams echo in your mind."
        + " The large man beside you turns and stares at you, his eyes wide with shock and sorrow. He knows what just happened—what could have been prevented."
        + " Despite the guilt weighing on your conscience, you remind yourself: taking an innocent life is never justifiable. You walk away, carrying the burden of your choice.", function() {
    document.getElementById("continue").style.display = "block";
    document.getElementById("continue").onclick = scenario3;
    document.getElementById("continue").classList.add("fade-in");
});
}

function scenario3() {
    document.getElementById("continue").style.display = "none";
    typeEffect(document.getElementById("scenarioText"), 
        "After a long morning of trolley related death, you finally arrive at work."
        + " You are a cybersecurity analyst at SecureTech, a leading software company. One day, while reviewing system logs, you discover evidence that the company has been secretly collecting and selling user data without consent."
        + " This violates the company’s privacy policies and misleads customers, who believe their data is secure. You take your concerns to your manager, who tells you:"
        + " 'I get it, but exposing this will destroy the company. We’ll face lawsuits, people will lose their jobs, and you’ll probably be fired. The higher-ups don’t want this getting out. Just forget about it.'"
        + " You feel the weight of this decision. If you report this, you could lose everything—but staying silent means allowing unethical practices to continue. "
        + " What do you do? ", function() {
    document.getElementById("choice1").innerHTML = "Report the company’s unethical practices, even if it means facing consequences and risking your job.";
    document.getElementById("choice2").innerHTML = "Stay silent, reasoning that the damage from exposing the truth (lawsuits, job losses) outweighs the benefit of disclosure.";
    document.getElementById("choice1").onclick = deontological3;
    document.getElementById("choice2").onclick = utilitarian3;
    document.getElementById("choice1").style.display = "block";
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice1").classList.add("fade-in");
    document.getElementById("choice2").classList.add("fade-in");
});
}

function utilitarian3() {
    updateUtilitarian();
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    typeEffect(document.getElementById("scenarioText"),
        "You did what your manager told you and kept your head down. After all, it wasn’t your responsibility to fix SecureTech’s ethical failures."
        + " But secrets don’t stay buried forever."
        + " A leak surfaces online, exposing the company’s shady practices. News stations report on the scandal, customers are outraged, and lawsuits pile up. The CEO resigns.", function() {
    document.getElementById("continue").style.display = "block";
    document.getElementById("continue").onclick = scenario4A;
    document.getElementById("continue").classList.add("fade-in");
});
}

function deontological3() {
    updateDeontological();
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    typeEffect(document.getElementById("scenarioText"),
        "You knew the risks, but you did what you believed was right."
        + " As expected, SecureTech fired you immediately. News outlets picked up the story, and government regulators launched an investigation."
        + " Some people hailed you as a hero for standing up against corporate corruption. Others called you reckless, saying you cost hundreds of employees their jobs."
        + " But you know you did the right thing, even if it came at a personal cost.", function() {
    document.getElementById("continue").style.display = "block";
    document.getElementById("continue").onclick = scenario4B;
    document.getElementById("continue").classList.add("fade-in");
});
}

function scenario4A() {
    document.getElementById("continue").style.display = "none";
    typeEffect(document.getElementById("scenarioText"),
        "One morning, your manager calls you into his office. He looks exhausted."
        + " 'The board is cleaning house. They’re looking for scapegoats, and your name is on the list. I fought for you, but... I can’t stop this. You should start looking for another job.'"
        + " Before you leave the office, a co-worker pulls you aside."
        + " 'Hey, I know you found out about this before it went public. Why didn’t you say anything? You could’ve stopped this before it got worse.'"
        + " How do you respond?", function() {
    document.getElementById("choice1").innerHTML = "'You're right. I should have spoken up. I failed to act on my moral duty, and people got hurt because of it.'";
    document.getElementById("choice2").innerHTML = "Defend your decision, arguing that you were following orders and protecting your job, as well as the jobs of hundreds more.";
    document.getElementById("choice1").onclick = deontological4A;
    document.getElementById("choice2").onclick = utilitarian4A;
    document.getElementById("choice1").style.display = "block";
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice1").classList.add("fade-in");
    document.getElementById("choice2").classList.add("fade-in");
});
}

function scenario4B() {
    document.getElementById("continue").style.display = "none";
    typeEffect(document.getElementById("scenarioText"), 
        "You are struggling to find a new job after being fired from SecureTech. The scandal has made headlines, and your reputation is tarnished."
        + " One day, you get a call from ByteShield, a major cybersecurity firm. They offer you a position on their team, but during the final interview, you discover something unsettling."
        + " ByteShield has a strict internal policy: Employees must sign a contract stating they will never report ethical violations externally."
        + " If wrongdoing is discovered, it must stay within the company, no matter how severe. The hiring manager explains:"
        + " 'We don’t need another scandal like SecureTech. You seem talented, but we need loyalty. Sign the agreement, and the job is yours.'"
        + " What do you do?", function() {
    document.getElementById("choice1").innerHTML = "Refuse to sign the contract, prioritizing your ethical principles over a job opportunity.";
    document.getElementById("choice2").innerHTML = "Sign the contract, reasoning that you need financial stability, and refusing won’t change ByteShield’s policies—it will only leave you unemployed. If you ever encounter ethical issues, you’ll try to fix them from the inside instead of exposing them publicly.";
    document.getElementById("choice1").onclick = deontological4B;
    document.getElementById("choice2").onclick = utilitarian4B;
    document.getElementById("choice1").style.display = "block";
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice1").classList.add("fade-in");
    document.getElementById("choice2").classList.add("fade-in");
});
}

function deontological4A() {
    updateDeontological();
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    typeEffect(document.getElementById("scenarioText"),
        "You take a deep breath and admit your mistake."
        + " 'You’re right. I should have spoken up. I failed to act on my moral duty, and people got hurt because of it.'"
        + " Your co-worker nods, understanding the weight of your words. You may have lost your job, but you refuse to lose your integrity."
        + " You lose your job within a few weeks, leaving you on the hunt for a brighter future."
        + " After a while of job searching, you find a position at a cybersecurity firm, TechFlow, where your values align with the company’s mission.", function() {
    document.getElementById("continue").style.display = "block";
    document.getElementById("continue").onclick = scenario5;
    document.getElementById("continue").classList.add("fade-in");
});
}

function utilitarian4A() {
    updateUtilitarian();
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    typeEffect(document.getElementById("scenarioText"),
        "You defend your decision, trying to justify your actions."
        + " 'I was following orders and protecting my job, as well as the jobs of hundreds more. I couldn’t risk everything for a moral stand.'"
        + " Your co-worker listens, but the disappointment in their eyes is evident. You may have tried to save yours and others job, but at what cost?"
        + " You lose your job within a few weeks, leaving you on the hunt for a brighter future."
        + " After a while of job searching, you find a position at a cybersecurity firm, TechFlow, where your values align with the company’s mission.", function() {
    document.getElementById("continue").style.display = "block";
    document.getElementById("continue").onclick = scenario5;
    document.getElementById("continue").classList.add("fade-in");
});
}

function deontological4B() {
    updateDeontological();
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    typeEffect(document.getElementById("scenarioText"),
        "You refuse to sign the contract, standing by your ethical principles."
        + " 'I can’t agree to those terms. If I see something wrong, I have a duty to report it, no matter where I work.'"
        + " The hiring manager nods, understanding your stance. You leave ByteShield, knowing that your integrity is worth more than any job."
        + " After a while of job searching, you find a position at a rival cybersecurity firm, TechFlow, where your values align with the company’s mission.", function() {
    document.getElementById("continue").style.display = "block";
    document.getElementById("continue").onclick = scenario5;
    document.getElementById("continue").classList.add("fade-in");
});
}

function utilitarian4B() {
    updateUtilitarian();
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    typeEffect(document.getElementById("scenarioText"),
        "You sign the contract, prioritizing financial stability over your ethical principles."
        + " 'I understand the company’s concerns. I’ll sign the agreement.'"
        + " You start your new job at ByteShield, hoping that you can make a difference from within. But the weight of your decision lingers in the back of your mind."
        + "<bt>You work there for a while, keeping your head down. Eventually, a rival company, TechFlow, offers you a position. You accept the offer and leave ByteShield, hoping for a fresh start.", function() {
    document.getElementById("continue").style.display = "block";
    document.getElementById("continue").onclick = scenario5;
    document.getElementById("continue").classList.add("fade-in");
});
}

function scenario5() {
    document.getElementById("continue").style.display = "none";
    typeEffect(document.getElementById("scenarioText"),
        "Shortly after joining TechFlow, the company assigns you to work on a brand new AI system."
        + " The company has developed an advanced predictive AI that can be implemented in healthcare, law enforcement, and even financial services. The AI can predict who is at risk for certain health issues or financial ruin and can determine which individuals are more likely to commit a crime based on historical data. The potential good is undeniable: lives could be saved, crime rates could be reduced, and resources could be allocated more efficiently."
        + " But there’s a catch: the AI is biased. It favors certain demographics, unintentionally discriminating against others. Historical data has led to predictions that unfairly target minorities, perpetuating systemic inequality. Some of your colleagues argue that fixing the bias will take time and that the company should launch the AI immediately. Others think you should hold off until the AI is free from bias, but doing so might cost the company millions and slow down its progress."
        + " You’ve now arrived at a crucial point in your career. The decision you make could have wide-reaching consequences, both for the company and for the society that will be affected by this technology. Your past decisions—whether you stood up for what’s right, followed the rules, or acted out of personal character—are shaping how you view this dilemma."
        + " What do you do? ", function() {
    document.getElementById("choice1").innerHTML = "Launch the AI immediately, believing that the benefits to society outweigh the potential harms.";
    document.getElementById("choice2").innerHTML = "Delay the AI launch until the biases are addressed, even if it costs the company money and time.";
    document.getElementById("choice1").onclick = utilitarian5;
    document.getElementById("choice2").onclick = deontological5;
    document.getElementById("choice1").style.display = "block";
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice1").classList.add("fade-in");
    document.getElementById("choice2").classList.add("fade-in");
});
}

function utilitarian5() {
    updateUtilitarian();
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    typeEffect(document.getElementById("scenarioText"),
        "You decide to launch the AI immediately, believing that the benefits to society outweigh the potential harms."
        + " The company celebrates, and investors are thrilled at the early success of the technology. The AI is integrated into hospitals, police stations, and even financial institutions."
        + " For a while, things seem to be going well. Lives are saved, crime rates drop, and resources are allocated more efficiently. But then, things start to go wrong."
        + " The AI’s biases begin to surface. People from minority backgrounds start facing unfair treatment in various sectors. In healthcare, certain patients are denied life-saving treatments, and in law enforcement, individuals are wrongly targeted for crimes based on faulty predictions."
        + " As the issues escalate, a massive public outcry emerges. The government intervenes, launching investigations into the company’s practices. The media labels you as a key player in this mess."
        + " You’re now under scrutiny, both publicly and internally. You receive a call from your company’s CEO, who is concerned about the backlash. There are talks of legal consequences, and you are forced to defend your actions.", function() {
    document.getElementById("continue").style.display = "block";
    document.getElementById("continue").innerHTML = "Show Results";
    document.getElementById("continue").onclick = endGame;
    document.getElementById("continue").classList.add("fade-in");
});
}

function deontological5() {
    updateDeontological();
    document.getElementById("choice1").style.display = "none";
    document.getElementById("choice2").style.display = "none";
    typeEffect(document.getElementById("scenarioText"),
        "You decide to delay the launch until the AI is refined and free from biases. This decision costs the company millions of dollars in potential profits and delays the project by months, but you are unwavering in your commitment to ensuring the technology is fair and just. Over time, the company faces increasing pressure from investors, and some colleagues question your decision."
        + " Eventually, after much hard work, the AI is revised and reprogrammed. It’s launched again, but this time, the company has implemented fairness algorithms to ensure unbiased predictions. The AI was fixed, but it took too long for the investors, and they had moved on."
        + " The market has already shifted. Competitors have released their own AI systems—some of them better and more advanced than yours. The investors who once praised your decision are now questioning your judgment, and the company’s stock price has plummeted.", function() {
    document.getElementById("continue").style.display = "block";
    document.getElementById("continue").innerHTML = "Show Results";
    document.getElementById("continue").onclick = endGame;
    document.getElementById("continue").classList.add("fade-in");
});
}

function endGame() {
    let percentUtilitarian = (utilitarianAnswers / 5) * 100;
    let percentDeontological = (deontologicalAnswers / 5) * 100;
    document.getElementById("continue").style.display = "none";
    let resultText = "You tried your best, making the best of each ethical dillema, unfortunately, the results are not always what you expected."
        + "\nHere are your results:"
        + "\nUtilitarian Decisions: " + utilitarianAnswers
        + "\nDeontological Decisions: " + deontologicalAnswers;
    if (percentUtilitarian > percentDeontological) {
        resultText += "\nYou made more utilitarian decisions than deontological ones. "
            + percentUtilitarian + "% of your decisions were utilitarian."
            + " You tend to prioritize the greater good over individual rights and principles.";
    } else if (percentDeontological > percentUtilitarian) {
        resultText += "\nYou made more deontological decisions than utilitarian ones. "
            + percentDeontological + "% of your decisions were deontological."
            + " You tend to prioritize individual rights and principles over the greater good.";
    }
    typeEffect(document.getElementById("scenarioText"), resultText, function() {
        document.getElementById("continue").style.display = "block";
        document.getElementById("continue").innerHTML = "Play Again";
        document.getElementById("continue").onclick = startGame;
        document.getElementById("continue").classList.add("fade-in");
    });
}