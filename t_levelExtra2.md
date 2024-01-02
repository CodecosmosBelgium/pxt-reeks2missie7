### @hideIteration true
### @flyoutOnly true
# Mission extra
```blocks
player.onChat("oef3", function () {
    Codecosmos.setup_extra2()
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
        if (Codecosmos.test_for_block_under_agent(GRASS) || Codecosmos.test_for_block_under_agent(MYCELIUM)) {
             Codecosmos.place_tree()
        }
        if (!(Codecosmos.is_close_to_fire_extra())) {
            Codecosmos.place_tree()
        }
        if (Codecosmos.test_for_block_under_agent(MYCELIUM) && Codecosmos.next_to_water_extra()) {
             Codecosmos.place_tree()
        }
    }
})
```

```template
player.onChat("levelExtra2", function () {
Codecosmos.setup_extra2()
 for (let index = 0; index < 19; index++) {
      
}
})
```

## Planting Trees

Use the learning platform to solve the exercise.
