function jumpBox(list) {
   location.href = list.options[list.selectedIndex].value
   }

//1997 All Rights Reserved, Daniel C. Peterson
//For commercial user rates please email a quote request to
//webmaster@webwinder.com

function compute(form)  {
    form.title.value = ("''A SHORT STORY,'' by " + form.firstName.value + " " + form.lastName.value);
    if(form.gender.value == "Male" || form.gender.value == "male") {var boyGirl = "boy"} else {var boyGirl = "girl"};
    if(form.gender.value == "Male" || form.gender.value == "male") {var heShe = "he"} else {var heShe = "she"};
    if(form.gender.value == "Male" || form.gender.value == "male") {var hisHer = "his"} else {var hisHer = "her"};
    if(form.gender.value == "Male" || form.gender.value == "male") {var himHer = "him"} else {var himHer = "her"};
    
    var pet = form.color.value + " " + form.animal.value

form.story.value = ("Once upon a time there was a young " + boyGirl + " named " + form.firstName.value + ".  " + form.firstName.value + " was " + form.age.value + " years old and lived in " + form.city.value + ", " + form.state.value + ".  While walking home from school one day, a " + pet + " jumped out from behind a " + form.plant.value + " and tackled " + form.firstName.value + " to the ground.  But just when " + heShe + " was about to let out a scream for help, " + form.firstName.value + " realized that the " + pet + " was only licking " + hisHer + " face, not trying to bite it off.  At that moment, " + form.firstName.value + " decided to keep the " + pet + " as a pet.  And on the way home " + heShe + " decided to name " + hisHer + " pet " + pet + " ''" + form.friend.value + ".''  When " + form.firstName.value + " and " + hisHer + " new pet finally got home, guess who was standing on the front porch?  That's right, it was " + form.firstName.value + "'s mother, " + form.mom.value + ".  And boy was she surprised to see a " + pet + " following " + form.firstName.value + " into the yard!  ''What in world is that?'' shouted " + form.mom.value + ".  ''It's a " + pet + ",'' answered " + form.firstName.value + ".  ''Dah, I can see that, " + form.firstName.value + ", but what on earth is it doing here?'' said " + form.mom.value + ".  ''It's my new pet!'' answered " + form.firstName.value +".  ''Oh you think so do you?'' remarked " + form.mom.value + ".  ''I wouldn't get your hopes up. You know how your father hates " + pet + "s.  But, well, I suppose you can keep him until your father comes home.''  And with that " + form.firstName.value + " grabbed " + form.friend.value + " by the scruff of the neck and led " + hisHer + " new pet into the house--even though " + heShe + " knew " + hisHer + " father was probably going to dissaprove.  Once in the house, " + form.firstName.value + " and " + form.friend.value + " played and played, that is until " + form.firstName.value + "'s favorite television show, ''"+ form.tv.value + ",'' started.  At that point " + form.firstName.value + " forgot all about " + form.friend.value + " having an unsupervised run of the house.  That is until half way through ''" + form.tv.value + ",'' when " + form.firstName.value + " was brought back to reality when " + heShe + " heard " + hisHer + " father shout, ''" + form.cuss.value + "!!  " + form.firstName.value + "! Get your " + form.butt.value + " in the " + form.room.value + "...NOW!!''  With that " + form.firstName.value + " rushed into the " + form.room.value + " to see what all the fuss was about.  When " + heShe + " entered the " + form.room.value + ", there stood " + hisHer + " father, " + form.dad.value + ", pointing toward the " + form.furn.value + ".  ''Will someone please explain that?'' asked " + hisHer + " father.  Then, as " + form.firstName.value + " followed " + hisHer + " father's finger to where it was pointing, " + heShe + " instantly knew what " + hisHer + " father was so upset about.  There, smack dab in the middle of the " + form.furn.value + ", was the biggest pile of " + form.animal.value + " doo-doo " + heShe + " had ever seen!  ''I don't EVEN want to know how that got there,'' said " + form.dad.value + ".  ''But you had better get it cleaned up now!  And you had better get rid of whatever it is that could have done such a thing!''  Well, knowing " + hisHer + " father as well as " + heShe + " did, " + form.firstName.value + " knew there was no sense even asking " + hisHer + " father if " + heShe + " could keep " + form.friend.value + " for a pet.  So without hesitation, " + form.firstName.value + " set out to find where " + form.friend.value + " was hiding.  After a few minutes of looking, " + form.firstName.value + " discovered " + form.friend.value + " crouched beneath the table that " + form.firstName.value + " did " + hisHer + " " + form.hobby.value + " on.  ''Come on, " + form.friend.value + ", it's time to find you a new home.  And hey, don't look at me that way, I'm not the one who did the dirty deed on the " + form.furn.value + "!'' scolded " + form.firstName.value + ".  ''Thanks to you I'll never get to have my own pet " + form.animal.value + "!!  And with that " + form.firstName.value + " led " + form.friend.value + " out of the house and down to the local " + form.store.value + ".  They had a pet section and " + form.firstName.value + " knew the owner would find " + form.friend.value + " a good home.  So after saying good-bye to " + form.friend.value + ", and thanking the owner of " + form.store.value + ", " + form.firstName.value + " walked backed home and attempted to dround " + hisHer + " sorrows by slamming down a half dozen " + form.drink.value + "s.  But " + form.firstName.value + "'s pitty party came to an abrupt end when " + hisHer + " father reminded " + himHer + " about the mess " + heShe + " had neglected to clean up.  And low and behold, midway through the clean-up, " + form.firstName.value + " suddenly became thankful that someone else was going to have to do it from now on.  The End.");

   
   } 

function ClearForm(form)  {
   form.story.value = "";
   form.title.value = "";
   }

function ClearData(form) {
   form.firstName.value = "";
   form.lastName.value = "";
   form.color.value = "";
   form.drink.value = "";
   form.city.value = "";
   form.state.value = "";
   form.mom.value = "";
   form.dad.value = "";
   form.animal.value = "";
   form.friend.value = "";
   form.store.value = "";
   form.furn.value = "";
   form.hobby.value = "";
   form.room.value = "";
   form.cuss.value = "";
   form.plant.value = "";
   form.age.value = "";
   form.gender.value = "";
   form.butt.value = "";
   form.tv.value = "";
   }
   