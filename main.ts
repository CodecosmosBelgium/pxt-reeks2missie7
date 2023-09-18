player.onChat("oef3", function () {
    Codecosmos.setup_extra1()
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
        if (Codecosmos.test_for_block_under_agent(GRASS) && !(Codecosmos.is_close_to_fire())) {
            Codecosmos.place_tree()
        }
    }
})
player.onChat("oef1", function () {
    Codecosmos.setup_1()
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
    }
})
player.onChat("levelExtra1", function () {
    Codecosmos.setup_extra1()
    for (let index = 0; index < 18; index++) {
        agent.move(FORWARD, 1)
        if (!(Codecosmos.is_close_to_fire_extra()) && (Codecosmos.test_for_block_under_agent(MYCELIUM) || Codecosmos.test_for_block_under_agent(GRASS))) {
            Codecosmos.place_tree()
        }
    }
})
