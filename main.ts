player.onChat("oef3", function () {
    Codecosmos.setup_extra()
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
        if (Codecosmos.test_for_block_under_agent(GRASS) || Codecosmos.test_for_block_under_agent(MYCELIUM)) {
            Codecosmos.place_tree()
        }
        if (!(Codecosmos.is_close_to_fire())) {
            agent.place(DOWN)
        }
        if (Codecosmos.test_for_block_under_agent(MYCELIUM) && Codecosmos.next_to_water()) {
            agent.place(DOWN)
        }
    }
})
player.onChat("oef1", function () {
    Codecosmos.setup_1()
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
    }
})
player.onChat("oef2", function () {
    Codecosmos.setup_2()
    for (let index = 0; index < 21; index++) {
        agent.move(FORWARD, 1)
    }
})
