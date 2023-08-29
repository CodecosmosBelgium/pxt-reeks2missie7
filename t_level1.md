### @hideIteration true
### @flyoutOnly true
# Mission 1
```blocks
player.onChat("oef1", function () {
    Codecosmos.setup_1()
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
        if (Codecosmos.test_for_block_under_agent(GRASS) || Codecosmos.test_for_block_under_agent(DIRT)) {
            Codecosmos.place_tree()
        }
    }
})
```

```template
player.onChat("oef1", function () {
 for (let index = 0; index < 21; index++) {
      
}
})
```

## Planting Trees

Use the learning platform to solve the exercise.
