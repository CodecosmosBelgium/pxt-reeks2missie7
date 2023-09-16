### @hideIteration true
### @flyoutOnly true
# Mission extra
```blocks
player.onChat("levelExtra1", function () {
    Codecosmos.setup_extra1()
    for (let index = 0; index < 18; index++) {
        agent.move(FORWARD, 1)
        if (!(Codecosmos.is_close_to_fire_extra()) && (Codecosmos.test_for_block_under_agent(MYCELIUM) || Codecosmos.test_for_block_under_agent(GRASS))) {
            Codecosmos.place_tree()
        }
    }
})
```

```template
player.onChat("levelExtra1", function () {
Codecosmos.setup_extra1()
 for (let index = 0; index < 18; index++) {
      
}
})
```

## Planting Trees

Use the learning platform to solve the exercise.
