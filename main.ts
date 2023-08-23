player.onChat("run", function () {
    Codecosmos.setup_1()
    if (Codecosmos.next_to_water()) {
    	
    }
    if (Codecosmos.is_close_to_fire()) {
    	
    }
    if (Codecosmos.test_for_block_under_agent(GRASS)) {
        Codecosmos.place_tree()
    }
})
