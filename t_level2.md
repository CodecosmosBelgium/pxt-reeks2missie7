### @hideIteration true
### @flyoutOnly true
# Mission 1
```blocks
player.onChat("oef2", function () {
    Codecosmos.setup_2()
    for (let index = 0; index < 21; index++) {
        agent.move(FORWARD, 1)
        if (Codecosmos.test_for_block_under_agent(MYCELIUM) && Codecosmos.next_to_water()) {
            agent.place(DOWN)
        }
    }
})
```

```template
player.onChat("oef2", function () {
 for (let index = 0; index < 21; index++) {
      
}
})
```

## Planting Trees

Use the learning platform to solve the exercise.
