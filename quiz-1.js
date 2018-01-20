<link rel="stylesheet" type="text/css" href="trivia.css">
        <script type="text/javascript" src="/trivia/trivia.js"></script>

function main(){ 
if (i===1){ 
    if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="1. What does Dunder Mifflin sell? \na)Paper and printers \nb)Printers \nc)Paper \nd)Office supplies";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="2. Who buys Dunder Mifflin? \na)Staples \nb)Sabre \nc)Prince Paper Company \nd)Pulp and Paper industry";
    document.view.qans.value=""
}
    else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="3. What is Michael Scott's greatest fear? \na)Women \nb)Stanley \nc)Nothing \nd)Snakes";
    document.view.qans.value=""
}
       else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="4. Where was holly transferred from and back to? \na)Nashua \nb)Buffalo \nc)Utica \nd)New York";
    document.view.qans.value=""
}
   else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="5. Who did Oscar date in the beginning year of The Office? \na)Angela \nb)Pam \nc)Robert Lipton \nd)Gil";
    document.view.qans.value=""
}
   else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="6. What tv show did Michael use for his Sweeney Todd audition? \na)CSI \nb)Law and Order \nc)Greys Anatomy \nd)Criminal Minds";
    document.view.qans.value=""
}
   else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="7. Who does Michael accidentally hit with his car in the parking lot? \na)Meredith \nb)Phyllis \nc)Angela \nd)Kelly";
    document.view.qans.value=""
}
   else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="8. What is the name of Angela's cat that Dwight killed? \na)Bandit \nb)Comstock \nc)Mr. Ash \nd)Sprinkles";
    document.view.qans.value=""
}
   else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="9. According to "Prison Mike", what is the worst thing about prison? \na)The orcs \nb)The dementors \nc)The banshees \nd)The food";
    document.view.qans.value=""
}
   else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="10. What is the name of the company Ryan sets up that sends messages to all of your devices at once? \na)Wuphf \nb)Barkk \nc)Grrowl \nd)Bitee";
    document.view.qans.value=""
}
   else if (i===11){ 
	document.view.qnum.value=i;	
	document.view.question.value ="11. What's in the giant pot that Kevin drops all over the office floor? \na)Gravy \nb)Bolognese \nc)Chicken Noodle Soup \nd)Chili";
    document.view.qans.value=""
}
   else if (i===12){ 
	document.view.qnum.value=i;	
	document.view.question.value ="12. According to the song the office sing to Michael when he leaves, how many minutes did he work at Dunder Mifflin for? \na)6,848,000 \nb)9,986,000 \nc)12,802,000 \nd)10,352,000";
    document.view.qans.value=""
}


	i++; 
}
    </script>
</head>
<body LINK="F7DD5E" VLINK="F7DD5E" ALINK="F7DD5E" onLoad="main()">
<br>
<FORM name="view">  
	Question: &nbsp;<input type="text" name="qnum" size="2" >&nbsp;<input type="button" name="go" value=" Next Question" onClick=main()>
    <br>
    <br>
    Answer:&nbsp;&nbsp;&nbsp; <input type="text" id="qans" size="2">&nbsp;<input type="button" value="Submit Answer" onClick=submitAnswer()>
	<br>
    <br>
    Score: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" id= "score" name="qscore" size="2">
	<br>
	<br>
	<TEXTAREA COLS=31 ROWS=9 id="question"  wrap="virtual"></TEXTAREA> 
</FORM>
</body>
</html>

