# Inspiration

We were thinking of cool things we could do to leverage the practically instant, live streaming nature of Convex. We were thinking along the lines of Kahoot and Jackbox, but wanted something that could inspire sustainability. We ended up going down the path of trying to build a game that could be played in the classroom and have an aspect of competition against other classmates and the one single player of the game (usually your teacher).

# Gameplay

One person has to start the game and start in "god" mode where they have control of all the natural events and can see that states of all the trees. They have the game code where players can go and join in.

Players can scan the QR code or enter the game PIN and then a username to join the game. Once they are in the game, they start off with 100 health and are trying to live as long as possible. Players can team up with other players by adding them to their "grove", which allows benefits including fertilization and watering to affect your whole grove. Fertilization gains more HP, however it negatively impacts anyone who isn't in your grove.

The "god" is trying to end all of the trees and has access to several different natural events including:
## Lightning

Strikes one player dead. Has the possibility of starting a forest fire, which increases with the amount of dead trees hanging around.
## Forest Fires

Does a set amount of damage to all trees. The damage increases as more dead trees start to exist, making this attack get more powerful the more trees that fall.
## Flood

Does a set amount of damage to all trees. This also deals more damage as more trees die to the increase ability for washouts, but isn't as significant as the fire damage increases.
## Drought

Does a fixed amount of damage to all trees.
## Bugs

Does a small amount of damage to all trees with a large random factor for how effective the bug attack is.
# How we built it

This project was enabled by Convex.

All states are stored in the overarching Convex database and updated in realtime across all clients, making it easy to sync communication. We store a new object for each game code containing a map of trees, which allows us to quickly retrieve neighbor nodes and display all the connections in the graph.

Tree objects are updated as state is changed. We can handle many different games at once due to nature of the database models.

Styling was all done with Tailwind and an extensive amount of flexbox.
# Challenges we ran into

- Styling everything responsively was a bit of a challenge. Making sure that everything grew to the right size of the screen and looked right on mobile and desktop, without the ability to make too many platform specific design choices was a challenge, although it was made easier by Tailwind.

- Effectively updating other elements took some work. This was made easier by Convex's built in methods, but still required some design decisions and reworking of data models to find the best solution for storing our objects.
# Accomplishments that we're proud of

- We really like the animations on the tree and how they act as health bar operators.

- The ability to host it live and connect in with a QR code makes it a lot more engaging and makes it look like a really cool demo.
# What we learned

- We learned how to use Convex for this and a lot more about reactive elements and how to interact with them.

- We learned more about Tailwind styling (it was the first time using Tailwind and PostCSS for two team members).

- We learned Typescript and how JavaScript types work. Also a lot more about when and where values can be null.
# What's next for Forest

There were a bunch of ideas that were going to be put into the original product but were cut for lack of time. Some of these include:

- Adding cooldowns for actions and having a timed play period. This would make the game more competitive and fair.
- Different types of trees which are more or less affected by different types of attacks.
- More information about these natural disasters and how they affect the environment.
- Events pulled from real time actual events worldwide.
- Regional multipliers that affect each other and make different users more affected by different disasters.

