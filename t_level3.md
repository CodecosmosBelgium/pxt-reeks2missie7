### @hideIteration true
### @flyoutOnly true
# Mission 3
```blocks
player.onChat("oef3", function () {
    Codecosmos.setup_3()
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
        if (!(Codecosmos.is_close_to_fire())) {
            agent.place(DOWN)
        }
    }
})
```

```template
player.onChat("oef3", function () {
 for (let index = 0; index < 21; index++) {
      
}
})
```

## Planting Trees

Use the learning platform to solve the exercise.