/**
 * Custom blocks
 */
//% color=190 weight=100 block="CodeCosmos"
namespace Codecosmos {
   
    //% block="is blok %block=block onder agent"
    //% block.shadow=minecraftBlock
    export function test_for_block_under_agent(block : number) : boolean {
        return blocks.testForBlock(block, agent.getPosition().add(world(0,-1,0)))
    }

    //% block="is water naast agent"
    export function next_to_water() : boolean{
        return blocks.testForBlock(WATER, agent.getPosition().add(pos(0, 0, 1))) || blocks.testForBlock(WATER, agent.getPosition().add(pos(0, 0, -1)))
    }

    //% block="is dichtbij vuur"
    export function is_close_to_fire() : boolean{
        let isFire: boolean = false
        for(let i : number = -3; i < 3; i++){
            if(blocks.testForBlock(FIRE, agent.getPosition().add(world(i, 0, 0)))){
               isFire = true
               break; 
            }
        }
        
        return isFire;
    }

    //% block="Plant boom"
    export function place_tree() : void{
        agent.setSlot(0);
        agent.place(DOWN);
    }

    //% block="Zet klaar (1)"
    export function setup_1(): void{
        ///fill 225 74 43 244 74 43 air
        agent.teleport(world(224, 74, 43), EAST)
        blocks.fill(AIR, world(225,74,43), world(244, 74, 43), FillOperation.Replace)
    }

    //% block="Zet klaar (2)"
    export function setup_2(): void {
        ///fill 244 74 36 225 74 36 AIR
        blocks.fill(AIR, world(244, 74, 36), world(225, 74, 36), FillOperation.Replace)
        agent.teleport(world(224, 74, 36), EAST)
    }

    //% block="Zet klaar (3)"
    export function setup_3(): void {
        //fill 239 74 29 244 74 29 air
        blocks.fill(AIR, world(229, 74, 29), world(225, 74, 29), FillOperation.Replace)
        blocks.fill(AIR, world(231, 74, 29), world(237, 74, 29), FillOperation.Replace)
        blocks.fill(AIR, world(239, 74, 29), world(244, 74, 29), FillOperation.Replace)
        agent.teleport(world(224, 74, 29), EAST)
    }

    //% block="Zet klaar (extra)"
    export function setup_extra(): void {
        blocks.fill(AIR, world(234, 71, 9), world(234, 71, -2), FillOperation.Replace)
        blocks.fill(AIR, world(234, 71, -8), world(234, 71, -4), FillOperation.Replace)
        agent.teleport(world(234, 71, 10), NORTH)
    }
}