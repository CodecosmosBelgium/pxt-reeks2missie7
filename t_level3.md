### @hideIteration true
### @flyoutOnly true
# Mission 3
```blocks
player.onChat("oef3", function () {
    Codecosmos.setup_3()
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
        if (Codecosmos.test_for_block_under_agent(GRASS) && !(Codecosmos.is_close_to_fire())) {
            Codecosmos.place_tree()
        }
    }
})
```

```template
player.onChat("oef3", function () {
 Codecosmos.setup_3()
 for (let index = 0; index < 21; index++) {
      
}
})
```

## Planting Trees

Use the learning platform to solve the exercise.
