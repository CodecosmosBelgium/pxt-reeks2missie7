/**
 * Custom blocks
 */
//% color=190 weight=100 block="CodeCosmos"
namespace Codecosmos {
   
    //% block="is %block=block under agent"
    //% block.shadow=minecraftBlock
    //% block.loc.nl="is blok %block=block onder agent"
    export function test_for_block_under_agent(block : number) : boolean {
        return blocks.testForBlock(block, agent.getPosition().add(world(0,-1,0)))
    }

    //% block="water next to agent"
    //% block.loc.nl="water naast agent"
    export function next_to_water() : boolean{
        return blocks.testForBlock(WATER, agent.getPosition().add(pos(0, -1, 1))) || blocks.testForBlock(WATER, agent.getPosition().add(pos(0, -1, -1)))
    }

    //% block="water next to agent"
    //% block.loc.nl="water naast agent"
    export function next_to_water_extra(): boolean {
        return blocks.testForBlock(WATER, agent.getPosition().add(pos(1, -1, 0))) || blocks.testForBlock(WATER, agent.getPosition().add(pos(-1, -1, 0)))
    }


    //% block="close to fire"
    //% block.loc.nl="dichtbij vuur"
    export function is_close_to_fire() : boolean{
        let isFire: boolean = false
        for(let i : number = -2; i <= 2; i++){
            if(blocks.testForBlock(FIRE, agent.getPosition().add(world(i, 0, 0)))){
               isFire = true
               break; 
            }
        }
        
        return isFire;
    }


    //% block="close to fire"
    //% block.loc.nl="dichtbij vuur"
    export function is_close_to_fire_extra(): boolean {
        let isFire: boolean = false
        for (let i: number = -2; i < 3; i++) {
            if (blocks.testForBlock(FIRE, agent.getPosition().add(world(0, 0, i)))) {
                isFire = true
                break;
            }
        }

        return isFire;
    }

    //% block="plant tree"
    //% block.loc.nl="plant boom"
    export function place_tree() : void{
        agent.setSlot(0);
        agent.place(DOWN);
    }

    //% block="setup"
    //% block.loc.nl="Zet klaar"
    export function setup_1(): void{
        ///fill 225 74 43 244 74 43 air
        agent.setItem(JUNGLE_SAPLING, 64, 1)
        agent.teleport(world(224, 74, 43), EAST)
        blocks.fill(AIR, world(247,74,43), world(222, 74, 43), FillOperation.Replace)
        ///fill 246 74 43 222 74 43 air
    }

    //% block="setup"
    //% block.loc.nl="Zet klaar"
    export function setup_2(): void {
        ///fill 244 74 36 225 74 36 AIR
        agent.setItem(JUNGLE_SAPLING, 64, 1)
        blocks.fill(AIR, world(244, 74, 36), world(222, 74, 36), FillOperation.Replace)
        agent.teleport(world(224, 74, 36), EAST)
    }

    //% block="setup"
    //% block.loc.nl="Zet klaar"
    export function setup_3(): void {
        //fill 239 74 29 244 74 29 air
        agent.setItem(JUNGLE_SAPLING, 64, 1)
        blocks.fill(AIR, world(229, 74, 29), world(222, 74, 29), FillOperation.Replace)
        blocks.fill(AIR, world(237, 74, 29), world(231, 74, 29), FillOperation.Replace)
        blocks.fill(AIR, world(247, 74, 29), world(239, 74, 29), FillOperation.Replace)
        blocks.place(FIRE, world(230, 74, 29));
        agent.teleport(world(224, 74, 29), EAST)
    }

    //% block="setup"
    //% block.loc.nl="Zet klaar"
    export function setup_extra1(): void {
        agent.setItem(JUNGLE_SAPLING, 64, 1)
        blocks.fill(AIR, world(224, 71, 5), world(224, 71, 11), FillOperation.Replace)
        blocks.fill(AIR, world(224, 71, 3), world(224, 71, -2), FillOperation.Replace)
        blocks.fill(AIR, world(224, 71, -11), world(224, 71, -4), FillOperation.Replace)
        blocks.place(FIRE, world(224, 71, 4));
        blocks.place(FIRE, world(224, 71, -3));
        agent.teleport(world(224, 71, 10), NORTH)
    }

    //% block="setup"
    //% block.loc.nl="Zet klaar"
    export function setup_extra2(): void {
        agent.setItem(JUNGLE_SAPLING, 64, 1)
        blocks.fill(AIR, world(234, 71, 11), world(234, 71, -2), FillOperation.Replace)
        blocks.fill(AIR, world(234, 71, -11), world(234, 71, -4), FillOperation.Replace)
        blocks.place(FIRE, world(234, 71, -3));
        agent.teleport(world(234, 71, 10), NORTH)
    }
}