### @hideIteration true
### @flyoutOnly true
# Mission extra
```blocks
player.onChat("oef3", function () {
    Codecosmos.setup_extra()
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
        if (Codecosmos.test_for_block_under_agent(GRASS) || Codecosmos.test_for_block_under_agent(MYCELIUM)) {
             Codecosmos.place_tree()
        }
        if (!(Codecosmos.is_close_to_fire())) {
            Codecosmos.place_tree()
        }
        if (Codecosmos.test_for_block_under_agent(MYCELIUM) && Codecosmos.next_to_water()) {
             Codecosmos.place_tree()
        }
    }
})
```

```template
player.onChat("oefExtra", function () {
 for (let index = 0; index < 21; index++) {
      
}
})
```

## Planting Trees

Use the learning platform to solve the exercise.
