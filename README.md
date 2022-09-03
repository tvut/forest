# To set up convex
Init local project
```npx convex init```

Run file generation
```npx convex codegen```

Start dev server
```npx convex dev```

# Game play

different games
- tied to a unique game ID
- sign into the unique game ID

god mode vs everyone:
- god mode:
    - stats:
        - dead trees / all trees
            - used as a multiplier for certain events (fire)
        - average health
        - total of trees
    - actions:
        - lightning strike 
            - harms one tree
            - probability start forest fire * multiplier of dead mass
        - forest fire
            - probability start forest fire * multiplier of dead mass
        - flood
        - drought
            - possibility affected by type of tree
        - bugs
            - only affect some trees, not all
- user mode:
    - friends
        - add by id
        - when you do an action it does it to all your friends
    - actions
        - water
            - adds 5 hp to grove/friends
        - fertilize
            - add 10 hp to your grove, takes 5 away from all other trees

- how to win against god:
    - 50% are alive
    - 10 minutes
    - 60% health or above