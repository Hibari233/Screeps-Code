var builder = {
    run: function(creep, mode) {

        if(creep.memory.builder && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.builder = false;
	    }
	    if(!creep.memory.builder && creep.store.getFreeCapacity() == 0) {
	        creep.memory.builder = true;
        }
        var str = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
	    if(creep.memory.builder) {
            if(creep.build(str) == ERR_NOT_IN_RANGE) {
                creep.moveTo(str);
            }
        }
        else {
            if(mode == 'STORAGE') {
                const targets = creep.room.find(FIND_STRUCTURES, {
                    filter: object => {
                        return (object.structureType == STRUCTURE_STORAGE) &&
                                object.store.energy > 0;
                    }
                });
                if(creep.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else if(mode == 'DROP') {
                const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
                if(target) {
                    if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                }
            }
            else if(mode == 'SOURCE') {
                var sources = str.pos.findClosestByPath(FIND_SOURCES, {
                    filter: object => {
                        return object.energy != 0;
                    }
                });
                if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {creep.moveTo(sources);}
            }
            /*
            const targets = creep.room.find(FIND_STRUCTURES, {
                filter: object => {
                    return (object.structureType == STRUCTURE_TOWER) &&
                            object.store.energy > 0;
                }
            });
            
            targets.sort((a,b) => a.store.energy < b.store.energy);
            
            if(creep.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
            */
        }
	}
};

module.exports = builder;