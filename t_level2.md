### @hideIteration true
### @flyoutOnly true
# Mission 2
```blocks
player.onChat("oef2", function () {
    Codecosmos.setup_2()
    for (let index = 0; index < 21; index++) {
        agent.move(FORWARD, 1)
        if (Codecosmos.test_for_block_under_agent(MYCELIUM) && Codecosmos.next_to_water()) {
             Codecosmos.place_tree()
        }
    }
})
```

```template
player.onChat("oef2", function () {
 Codecosmos.setup_2()
 for (let index = 0; index < 21; index++) {
      
}
})
```

## Planting Trees

Use the learning platform to solve the exercise.
