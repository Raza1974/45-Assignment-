#! /usr/bin/env node

/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list 
that includes at least three people you’d like to invite to dinner. Then use your list to print a message to 
each person, inviting them to dinner.
*/
const myfriends: string[]=["Asim","Faheem","Azeem",];
// 1st method with loop
for(let i = 0; i < myfriends.length; i++){
 console.log(`Mr. ${myfriends[i]},! You are invited to my dinner on monday. `);
}