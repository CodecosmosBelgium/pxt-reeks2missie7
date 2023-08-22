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
        return blocks.testForBlock(WATER, agent.getPosition().add(world(0, 0, 1))) || blocks.testForBlock(WATER, agent.getPosition().add(world(0, 0, -1)))
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
        agent.teleport(world(224, 74, 43), EAST)
    }
}