var drone = require('drone');
var upgrader = require('upgrader');
var builder = require('builder');
var scout = require('scout');
var repairer = require('repairer');
var transporter = require('transporter');
var queen = require('queen');
var charger = require('charger');
var transmitter = require('transmitter');
var guarder = require('guarder');
var mdrone = require('mdrone');
var tower = require('tower');
var check = require('stateScanner');
var modern_transporter = require('modern_transporter');
var claimer = require('claimer');
var attacker = require('attacker');
var attacker_drone = require('attacker_drone');
var manager = require('manager');
var attacker_team = require('attacker_team');
require('optimize');
const labCtrl = require('labCtrl');

module.exports.loop = function () {
    if(Game.shard.name === 'shard2') return;
    const show_details = false;
    var drone1_num = 1;
    var drone2_num = 1;
    var drone3_num = 1;
    var drone4_num = 1;
    var drone5_num = 1;
    var drone6_num = 1;
    var drone7_num = 1;
    var drone8_num = 1;
    var drone9_num = 1;
    var drone12_num = 1;
    var drone13_num = 1;
    var mdrones1_num = 1;
    var mdrones2_num = 1;
    var scouts1_num = 1;
    var scouts2_num = 1;
    var scouts3_num = 1;
    var scouts4_num = 1;
    var scouts5_num = 0;
    var scouts6_num = 0;
    var scouts7_num = 0;
    var scouts8_num = 1;
    var transporter1s_num = 1;
    var transporter2s_num = 3;
    var transporter3s_num = 2;
    var transporter4s_num = 1;
    var transporter5s_num = 3;
    var transporter6s_num = 3;
    var modern_transporters_num = 0;
    var transmitter1s_num = 1;
    var transmitter2s_num = 1;
    var transmitter3s_num = 1;
    var transmitter4s_num = 1;
    var transmitter5s_num = 0;
    var guarder1s_num = 1;
    var guarder2s_num = 1;
    var guarder3s_num = 1;
    var guarder4s_num = 1;
    var repairers_num = 1;
    var queen1s_num = 1;
    var queen2s_num = 1;
    var upgrader1s_num = 1;
    var upgrader2s_num = 1;
    var builders_num = 0;
    var smallqueen1s_num = 1;
    var smallqueen2s_num = 1;
    var chargers_num = 1;
    var claimers_num = 0;
    var attackers_num = 0;
    var attacker_drones_num = 0;
    var attacker_team_attacker_num = 0;
    var attacker_team_healer_num = 0;
    var managers_W22S8_num = 1;
    var managers_W23S12_num = 1;

    for(const name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name]
        }
    }
    

    // #########################   drones  #############################
    var drones1 = 0,drones2 = 0,drones3 = 0,drones4 = 0,drones5 = 0,drones6 = 0,drones7 = 0,drones8 = 0,drones9 = 0,drones12 = 0,drones13 = 0;
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'drone' && creep.memory.s == 'source1') drones1 ++;
        if(creep.memory.role == 'drone' && creep.memory.s == 'source2') drones2 ++;
        if(creep.memory.role == 'drone' && creep.memory.s == 'source3') drones3 ++;
        if(creep.memory.role == 'drone' && creep.memory.s == 'source4') drones4 ++;
        if(creep.memory.role == 'drone' && creep.memory.s == 'source5') drones5 ++;
        if(creep.memory.role == 'drone' && creep.memory.s == 'source6') drones6 ++;
        if(creep.memory.role == 'drone' && creep.memory.s == 'source7') drones7 ++;
        if(creep.memory.role == 'drone' && creep.memory.s == 'source8') drones8 ++;
        if(creep.memory.role == 'drone' && creep.memory.s == 'source9') drones9 ++;
        if(creep.memory.role == 'drone' && creep.memory.s == 'source12') drones12 ++;
        if(creep.memory.role == 'drone' && creep.memory.s == 'source13') drones13 ++;
    }


    /*
    var drones1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source1');
    var drones2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source2'); 
    var drones3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source3');
    var drones4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source4');
    var drones5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source5'); 
    var drones6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source6');
    var drones7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source7');
    var drones8 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source8');
    var drones9 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source9');
    var drones12 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source12');
    var drones13 = _.filter(Game.creeps, (creep) => creep.memory.role == 'drone' && creep.memory.s == 'source13');
    */
    var mdrones1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'mdrone' && creep.memory.s == 'mineral1');
    var mdrones2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'mdrone' && creep.memory.s == 'mineral2');
    var scouts1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W22S7');
    var scouts2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W23S8');
    var scouts3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W23S9'); 
    var scouts4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W23S13');
    var scouts5 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W22S12');
    var scouts6 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W22S13');
    var scouts7 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W21S13'); 
    var scouts8 = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.memory.s == 'W23S7'); 
    var transporter1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.memory.s == 'W22S8');
    var transporter2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.memory.s == 'W23S8');
    var transporter3s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.memory.s == 'W23S9');
    var transporter4s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.memory.s == 'W23S12');
    var transporter5s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.memory.s == 'W23S13');
    var transporter6s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter' && creep.memory.s == 'W23S7');
    var modern_transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'modern_transporter');
    var guarder1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'guarder' && creep.memory.s == 'W23S8');
    var guarder2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'guarder' && creep.memory.s == 'W23S9');
    var guarder3s = _.filter(Game.creeps, (creep) => creep.memory.role == 'guarder' && creep.memory.s == 'W23S7');
    var guarder4s = _.filter(Game.creeps, (creep) => creep.memory.role == 'guarder' && creep.memory.s == 'W23S13');
    var transmitter1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transmitter' && creep.memory.s == 'W23S8');  
    var transmitter2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transmitter' && creep.memory.s == 'W23S9');
    var transmitter3s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transmitter' && creep.memory.s == 'W23S7');
    var transmitter4s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transmitter' && creep.memory.s == 'W23S13');
    var transmitter5s = _.filter(Game.creeps, (creep) => creep.memory.role == 'transmitter' && creep.memory.s == 'W22S12');
    var upgrader1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.controller == '5bbcabb19099fc012e63421f');
    var upgrader2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.controller == '5bbcaba59099fc012e6340a8');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var queen1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'queen' && creep.memory.source == '5e8ad848acf3f319ef9cb795');
    var queen2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'queen' && creep.memory.source == '5ebc76fd6ae95c609c9c64cd');
    var smallqueen1s = _.filter(Game.creeps, (creep) => creep.memory.role == 'smallqueen' && creep.memory.source == '5e8ad848acf3f319ef9cb795');
    var smallqueen2s = _.filter(Game.creeps, (creep) => creep.memory.role == 'smallqueen' && creep.memory.source == '5ebc76fd6ae95c609c9c64cd');
    var chargers = _.filter(Game.creeps, (creep) => creep.memory.role == 'charger');
    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');
    var attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
    var attacker_drones = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker_drone');
    var managers_W22S8 = _.filter(Game.creeps, (creep) => creep.memory.role == 'manager' && creep.memory.room == 'W22S8');
    var managers_W23S12 = _.filter(Game.creeps, (creep) => creep.memory.role == 'manager' && creep.memory.room == 'W23S12');
    var attacker_team_attackers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker_team_attacker');
    var attacker_team_healers = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker_team_healer');

    // #########################   panel  #############################
    if(show_details) {
        console.log('drones1: ' + drones1);
        console.log('drones2: ' + drones2);
        console.log('drones3: ' + drones3);
        console.log('drones4: ' + drones4);
        console.log('drones5: ' + drones5);
        console.log('drones6: ' + drones6);
        console.log('drones7: ' + drones7);
        console.log('drones8: ' + drones8);
        console.log('drones9: ' + drones9);
        console.log('drones12: ' + drones12);
        console.log('drones13: ' + drones13);
        console.log('mdrones1: ' + mdrones1.length);
        console.log('mdrones2: ' + mdrones2.length);
        console.log('scouts1: ' + scouts1.length);
        console.log('scouts2: ' + scouts2.length);
        console.log('scouts3: ' + scouts3.length);
        console.log('transporter1s: ' + transporter1s.length);
        console.log('transporter2s: ' + transporter2s.length);
        console.log('transporter3s: ' + transporter3s.length);
        console.log('transporter4s: ' + transporter4s.length);
        console.log('transporter5s: ' + transporter5s.length);
        console.log('transporter6s: ' + transporter6s.length);
        console.log('modern_transporters:' + modern_transporters.length);
        console.log('guarder1s: ' + guarder1s.length);
        console.log('guarder2s: ' + guarder2s.length);
        console.log('guarder3s: ' + guarder3s.length);
        console.log('guarder4s: ' + guarder4s.length);
        console.log('transmitter1s: ' + transmitter1s.length);
        console.log('transmitter2s: ' + transmitter2s.length);
        console.log('transmitter3s: ' + transmitter3s.length);
        console.log('transmitter4s: ' + transmitter4s.length);
        console.log('transmitter5s: ' + transmitter5s.length);
        console.log('upgrader1s: ' + upgrader1s.length);
        console.log('upgrader2s: ' + upgrader2s.length);
        console.log('builders: ' + builders.length);
        console.log('queen1s: ' + queen1s.length);
        console.log('queen2s: ' + queen2s.length);
        console.log('smallqueen1s: ' + smallqueen1s.length);
        console.log('smallqueen2s: ' + smallqueen2s.length);
        console.log('chargers: ' + chargers.length);
        console.log('repairers: ' + repairers.length);
        console.log('claimers: ' + claimers.length);
        console.log('attackers: ' + attackers.length);
        console.log('attacker_drones: ' + attacker_drones.length);
        console.log('attacker_team_attacker: ' + attacker_team_attackers.length);
        console.log('attacker_team_healer: ' + attacker_team_healers.length);
        console.log('managers_W22S8: ' + managers_W22S8.length);
        console.log('managers_W23S12: ' + managers_W23S12.length);
    }
    // #########################   num_control  #############################
    // #########################   attacker  #############################
    var spawn_W22S8 = getAvaliableSpawn('W22S8');
    var spawn_W23S12 = getAvaliableSpawn('W23S12');
    
    if(attackers.length < attackers_num && spawn_W22S8 != null) {
        var newName = 'attacker_' + Game.time;
        if(show_details) console.log('Spawning new attacker: ' + newName);
        spawn_W22S8.spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,RANGED_ATTACK,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL], newName, 
            {memory: {role: 'attacker'}});
    }

    if(attacker_drones.length < attacker_drones_num && spawn_W22S8 != null) {
        var newName = 'attacker_drone_' + Game.time;
        if(show_details) console.log('Spawning new attacker_drone: ' + newName);
        spawn_W22S8.spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'attacker_drone'}});
    }

    if(attacker_team_attackers.length < attacker_team_attacker_num && spawn_W22S8 != null) {
        var newName = 'attacker_team_attacker_' + Game.time;
        if(show_details) console.log('Spawning new attacker_team_attacker: ' + newName);
        spawn_W22S8.spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'attacker_team_attacker'}});
    }

    if(attacker_team_healers.length < attacker_team_healer_num && spawn_W22S8 != null) {
        var newName = 'attacker_team_healer_' + Game.time;
        if(show_details) console.log('Spawning new attacker_team_healer: ' + newName);
        spawn_W22S8.spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,HEAL,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'attacker_team_healer'}});
    }
    // #########################   drones  #############################
    
    if(drones1 < drone1_num && spawn_W22S8 != null) {
        var newName = 'drone1_' + Game.time;
        if(show_details) console.log('Spawning new drone1: ' + newName);
        spawn_W22S8.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source1'}});        
    }
    
    if(drones2 < drone2_num && spawn_W22S8 != null) {
        var newName = 'drone2_' + Game.time;
        if(show_details) console.log('Spawning new drone2: ' + newName);
        spawn_W22S8.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName,
            {memory: {role: 'drone', s: 'source2'}});        
    }
    
    if(drones3 < drone3_num && spawn_W22S8 != null) {
        var newName = 'drone3_' + Game.time;
        if(show_details) console.log('Spawning new drone3: ' + newName);
        spawn_W22S8.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source3'}});        
    }
    
    if(drones4 < drone4_num && spawn_W22S8 != null) {
        var newName = 'drone4_' + Game.time;
        if(show_details) console.log('Spawning new drone4: ' + newName);
        spawn_W22S8.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source4'}});        
    }

    if(drones5 < drone5_num && spawn_W22S8 != null) {
        var newName = 'drone5_' + Game.time;
        if(show_details) console.log('Spawning new drone5: ' + newName);
        spawn_W22S8.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source5'}});        
    }

    if(drones6 < drone6_num && spawn_W22S8 != null) {
        var newName = 'drone6_' + Game.time;
        if(show_details) console.log('Spawning new drone6: ' + newName);
        spawn_W22S8.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source6'}});        
    }

    if(drones7 < drone7_num && spawn_W23S12 != null) {
        var newName = 'drone7_' + Game.time;
        if(show_details) console.log('Spawning new drone7: ' + newName);
        spawn_W23S12.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source7'}});        
    }

    if(drones8 < drone8_num && spawn_W22S8 != null) {
        var newName = 'drone8_' + Game.time;
        if(show_details) console.log('Spawning new drone8: ' + newName);
        spawn_W22S8.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source8'}});        
    }

    if(drones9 < drone9_num && spawn_W22S8 != null) {
        var newName = 'drone9_' + Game.time;
        if(show_details) console.log('Spawning new drone9: ' + newName);
        spawn_W22S8.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source9'}});        
    }

    if(drones12 < drone12_num && spawn_W23S12 != null) {
        var newName = 'drone12_' + Game.time;
        if(show_details) console.log('Spawning new drone12: ' + newName);
        spawn_W23S12.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source12'}});        
    }

    if(drones13 < drone13_num && spawn_W23S12 != null) {
        var newName = 'drone13_' + Game.time;
        if(show_details) console.log('Spawning new drone13: ' + newName);
        spawn_W23S12.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'drone', s: 'source13'}});        
    }
    // #########################   mdrones  #############################

    if(mdrones1.length < mdrones1_num && spawn_W22S8 != null) {
        var newName = 'mdrone1_' + Game.time;
        if(show_details) console.log('Spawning new mdrone1: ' + newName);
        spawn_W22S8.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
            {memory: {role: 'mdrone', s: 'mineral1'}});
    }
    
    if(mdrones2.length < mdrones2_num && spawn_W23S12 != null) {
        var newName = 'mdrone2_' + Game.time;
        if(show_details) console.log('Spawning new mdrone2: ' + newName);
        spawn_W23S12.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName,
            {memory: {role: 'mdrone', s: 'mineral2'}});
    }

    // #########################   scouts  #############################

    if(scouts1.length < scouts1_num && spawn_W22S8 != null) {
        var newName = 'scout1_' + Game.time;
        if(show_details) console.log('Spawning new scout1: ' + newName);
        spawn_W22S8.spawnCreep([MOVE], newName, 
            {memory: {role: 'scout', s: 'W22S7'}});        
    }
    
    if(scouts2.length < scouts2_num && spawn_W22S8 != null) {
        var newName = 'scout2_' + Game.time;
        if(show_details) console.log('Spawning new scout2: ' + newName);
        spawn_W22S8.spawnCreep([MOVE], newName, 
            {memory: {role: 'scout', s: 'W23S8'}});        
    }
    
    if(scouts3.length < scouts3_num && spawn_W22S8 != null) {
        var newName = 'scout3_' + Game.time;
        if(show_details) console.log('Spawning new scout3: ' + newName);
        spawn_W22S8.spawnCreep([MOVE], newName, 
            {memory: {role: 'scout', s: 'W23S9'}});        
    }

    if(scouts4.length < scouts4_num && spawn_W23S12 != null) {
        var newName = 'scout4_' + Game.time;
        if(show_details) console.log('Spawning new scout4: ' + newName);
        spawn_W23S12.spawnCreep([MOVE], newName, 
            {memory: {role: 'scout', s: 'W23S13'}});
    }

    if(scouts5.length < scouts5_num && spawn_W23S12 != null) {
        var newName = 'scout5_' + Game.time;
        if(show_details) console.log('Spawning new scout5: ' + newName);
        spawn_W23S12.spawnCreep([MOVE], newName, 
            {memory: {role: 'scout', s: 'W22S12'}});
    }

    if(scouts6.length < scouts6_num && spawn_W23S12 != null) {
        var newName = 'scout6_' + Game.time;
        if(show_details) console.log('Spawning new scout6: ' + newName);
        spawn_W23S12.spawnCreep([MOVE], newName, 
            {memory: {role: 'scout', s: 'W22S13'}});
    }

    if(scouts7.length < scouts7_num && spawn_W23S12 != null) {
        var newName = 'scout7_' + Game.time;
        if(show_details) console.log('Spawning new scout7: ' + newName);
        spawn_W23S12.spawnCreep([MOVE], newName, 
            {memory: {role: 'scout', s: 'W21S13'}});
    }

    if(scouts8.length < scouts8_num && spawn_W22S8 != null) {
        var newName = 'scout8_' + Game.time;
        if(show_details) console.log('Spawning new scout8: ' + newName);
        spawn_W22S8.spawnCreep([MOVE], newName, 
            {memory: {role: 'scout', s: 'W23S7'}});
    }
    // #########################   transporters  #############################

    if(transporter1s.length < transporter1s_num && spawn_W22S8 != null) {
        var newName = 'transporter1_' + Game.time;
        if(show_details) console.log('Spawning new transporter1: ' + newName);
        spawn_W22S8.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'transporter', s: 'W22S8', des: '5e8ad848acf3f319ef9cb795'}});        
    }
    
    if(transporter2s.length < transporter2s_num && spawn_W22S8 != null) {
        var newName = 'transporter2_' + Game.time;
        if(show_details) console.log('Spawning new transporter2: ' + newName);
        spawn_W22S8.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'transporter', s: 'W23S8', des: '5e8ad848acf3f319ef9cb795'}});        
    }

    if(transporter3s.length < transporter3s_num && spawn_W22S8 != null) {
        var newName = 'transporter3_' + Game.time;
        if(show_details) console.log('Spawning new transporter3: ' + newName);
        spawn_W22S8.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'transporter', s: 'W23S9', des: '5e8ad848acf3f319ef9cb795'}});        
    }

    if(transporter4s.length < transporter4s_num && spawn_W23S12 != null) {
        var newName = 'transporter4_' + Game.time;
        if(show_details) console.log('Spawning new transporter4: ' + newName);
        spawn_W23S12.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'transporter', s: 'W23S12', des: '5ebc76fd6ae95c609c9c64cd'}});        
    }

    if(transporter5s.length < transporter5s_num && spawn_W23S12 != null) {
        var newName = 'transporter5_' + Game.time;
        if(show_details) console.log('Spawning new transporter5: ' + newName);
        spawn_W23S12.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'transporter', s: 'W23S13', des: '5ebc76fd6ae95c609c9c64cd'}});        
    }

    if(transporter6s.length < transporter6s_num && spawn_W22S8 != null) {
        var newName = 'transporter6_' + Game.time;
        if(show_details) console.log('Spawning new transporter5: ' + newName);
        spawn_W22S8.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'transporter', s: 'W23S7', des: '5e8ad848acf3f319ef9cb795'}});        
    }
    
    if(modern_transporters.length < modern_transporters_num && spawn_W22S8 != null) {
        var newName = 'modern_transporter_' + Game.time;
        if(show_details) console.log('Spawning new modern_transporter: ' + newName);
        spawn_W22S8.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'modern_transporter'}});
    }
    // #########################   transmitters  #############################

    if(transmitter1s.length < transmitter1s_num && spawn_W22S8 != null) {
        var newName = 'transmitter1_' + Game.time;
        if(show_details) console.log('Spawning new transmitter1: ' + newName);
        spawn_W22S8.spawnCreep([CLAIM,CLAIM,MOVE,MOVE], newName, 
            {memory: {role: 'transmitter', s: 'W23S8'}});        
    }

    if(transmitter2s.length < transmitter2s_num && spawn_W22S8 != null) {
        var newName = 'transmitter2_' + Game.time;
        if(show_details) console.log('Spawning new transmitter2: ' + newName);
        spawn_W22S8.spawnCreep([CLAIM,CLAIM,MOVE,MOVE], newName, 
            {memory: {role: 'transmitter', s: 'W23S9'}});        
    }

    if(transmitter3s.length < transmitter3s_num && spawn_W22S8 != null) {
        var newName = 'transmitter3_' + Game.time;
        if(show_details) console.log('Spawning new transmitter3: ' + newName);
        spawn_W22S8.spawnCreep([CLAIM,CLAIM,MOVE,MOVE], newName, 
            {memory: {role: 'transmitter', s: 'W23S7'}});        
    }

    if(transmitter4s.length < transmitter4s_num && spawn_W23S12 != null) {
        var newName = 'transmitter4_' + Game.time;
        if(show_details) console.log('Spawning new transmitter4: ' + newName);
        spawn_W23S12.spawnCreep([CLAIM,CLAIM,MOVE,MOVE], newName, 
            {memory: {role: 'transmitter', s: 'W23S13'}});        
    }

    if(transmitter5s.length < transmitter5s_num && spawn_W23S12 != null) {
        var newName = 'transmitter5_' + Game.time;
        if(show_details) console.log('Spawning new transmitter5: ' + newName);
        spawn_W23S12.spawnCreep([CLAIM,CLAIM,MOVE,MOVE], newName, 
            {memory: {role: 'transmitter', s: 'W22S12'}});        
    }
    
    // #########################   guarders  #############################

    if(guarder1s.length < guarder1s_num && spawn_W22S8 != null) {
        var newName = 'guarder1_' + Game.time;
        if(show_details) console.log('Spawning new guarder1: ' + newName);
        spawn_W22S8.spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'guarder', s: 'W23S8'}});        
    }

    if(guarder2s.length < guarder2s_num && spawn_W22S8 != null) {
        var newName = 'guarder2_' + Game.time;
        if(show_details) console.log('Spawning new guarder2: ' + newName);
        spawn_W22S8.spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'guarder', s: 'W23S9'}});
    }

    if(guarder3s.length < guarder3s_num && spawn_W22S8 != null) {
        var newName = 'guarder3_' + Game.time;
        if(show_details) console.log('Spawning new guarder3: ' + newName);
        spawn_W22S8.spawnCreep([TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'guarder', s: 'W23S7'}});
    }

    if(guarder4s.length < guarder4s_num && spawn_W23S12 != null) {
        var newName = 'guarder4_' + Game.time;
        if(show_details) console.log('Spawning new guarder4: ' + newName);
        spawn_W23S12.spawnCreep([ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'guarder', s: 'W23S13'}});
    }

    // #########################   others  #############################

    if(repairers.length < repairers_num && spawn_W22S8 != null) {
        var newName = 'repairer_' + Game.time;
        if(show_details) console.log('Spawning new repairer: ' + newName);
        spawn_W22S8.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'repairer'}});        
    }

    if(queen1s.length < queen1s_num && spawn_W22S8 != null) {
        var newName = 'queen1_' + Game.time;
        if(show_details) console.log('Spawning new queen1: ' + newName);
        spawn_W22S8.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'queen', source: '5e8ad848acf3f319ef9cb795'}});
    }

    if(queen2s.length < queen2s_num && spawn_W23S12 != null) {
        var newName = 'queen2_' + Game.time;
        if(show_details) console.log('Spawning new queen2: ' + newName);
        spawn_W23S12.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'queen', source: '5ebc76fd6ae95c609c9c64cd'}});
    }

    if(upgrader1s.length < upgrader1s_num && spawn_W22S8 != null) {
        var newName = 'upgrader1_' + Game.time;
        if(show_details) console.log('Spawning new upgrader1: ' + newName);
        spawn_W22S8.spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'upgrader',source: '5e8d48bbe1ebfe7eb1a00221',controller: '5bbcabb19099fc012e63421f'}});
    }

    if(upgrader2s.length < upgrader2s_num && spawn_W23S12 != null) {
        var newName = 'upgrader2_' + Game.time;
        if(show_details) console.log('Spawning new upgrader2: ' + newName);
        spawn_W23S12.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'upgrader',source: '5ebe186c26b7673a4ae868f9',controller: '5bbcaba59099fc012e6340a8'}});
    }

    if(builders.length < builders_num && spawn_W22S8 != null) {
        var newName = 'builder_' + Game.time;
        if(show_details) console.log('Spawning new builder: ' + newName);
        spawn_W22S8.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName,
            {memory: {role: 'builder'}});
    }
    
    if(smallqueen1s.length < smallqueen1s_num && spawn_W22S8 != null) {
        var newName = 'smallqueen1_' + Game.time;
        if(show_details) console.log('Spawning new smallqueen1: ' + newName);
        spawn_W22S8.spawnCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'smallqueen', source: '5e8ad848acf3f319ef9cb795'}});
    }

    if(smallqueen2s.length < smallqueen2s_num && spawn_W23S12 != null) {
        var newName = 'smallqueen2_' + Game.time;
        if(show_details) console.log('Spawning new smallqueen2: ' + newName);
        spawn_W23S12.spawnCreep([CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'smallqueen', source: '5ebc76fd6ae95c609c9c64cd'}});
    }

    if(chargers.length < chargers_num && spawn_W22S8 != null) {
        var newName = 'charger_' + Game.time;
        if(show_details) console.log('Spawning new charger: ' + newName);
        spawn_W22S8.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'charger'}});
    }

    if(claimers.length < claimers_num && spawn_W22S8 != null) {
        var newName = 'claimer_' + Game.time;
        if(show_details) console.log('Spawning new claimer: ' + newName);
        spawn_W22S8.spawnCreep([CLAIM,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'claimer'}});
    }

    if(managers_W22S8.length < managers_W22S8_num && spawn_W22S8 != null) {
        var newName = 'manager_W22S8_' + Game.time;
        if(show_details) console.log('Spawning new manager_W22S8: ' + newName);
        spawn_W22S8.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'manager' ,room: 'W22S8'}});
    }

    if(managers_W23S12.length < managers_W23S12_num && spawn_W23S12 != null) {
        var newName = 'manager_W23S12_' + Game.time;
        if(show_details) console.log('Spawning new manager_W23S12: ' + newName);
        spawn_W23S12.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'manager' ,room: 'W23S12'}});
    }
    
    if(Game.spawns['Hibari'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Hibari'].spawning.name];
        Game.spawns['Hibari'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Hibari'].pos.x + 1, 
            Game.spawns['Hibari'].pos.y, 
            {align: 'left', opacity: 0.8});
    }

    if(Game.spawns['Hibari2'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Hibari2'].spawning.name];
        Game.spawns['Hibari2'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Hibari2'].pos.x - 1, 
            Game.spawns['Hibari2'].pos.y + 1, 
            {align: 'left', opacity: 0.8});
    }

    if(Game.spawns['Hibari3'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Hibari3'].spawning.name];
        Game.spawns['Hibari3'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Hibari3'].pos.x - 1, 
            Game.spawns['Hibari3'].pos.y + 1, 
            {align: 'left', opacity: 0.8});
    }

    if(Game.spawns['Hibari4'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Hibari4'].spawning.name];
        Game.spawns['Hibari4'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Hibari4'].pos.x - 1, 
            Game.spawns['Hibari4'].pos.y + 1, 
            {align: 'left', opacity: 0.8});
    }
    
    var towers_W22S8 = Game.rooms.W22S8.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return structure.structureType == STRUCTURE_TOWER;
            }
    });

    var towers_W23S12 = Game.rooms.W23S12.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return structure.structureType == STRUCTURE_TOWER;
            }
    });
    
    for (var i = 0; i < towers_W22S8.length; i ++) {
        tower.run(towers_W22S8[i], 1000, 1000);
    }

    for (var i = 0; i < towers_W23S12.length; i ++) {
        tower.run(towers_W23S12[i], 100000, 100000);
    }
	
    var linkbase_W22S8_1 = Game.getObjectById('5edf11ab5c8fed76f30aedad');
    var linkbase_W22S8_2 = Game.getObjectById('5e8d2e96af620e6f08ccd3f7');
    var linkbase_W22S8_3 = Game.getObjectById('5ee083a2adccaf3c5584f062');
    var linkto_W22S8 = Game.getObjectById('5e8d48bbe1ebfe7eb1a00221');
    if(linkto_W22S8.store.energy == 0){
        if(linkbase_W22S8_1.cooldown == 0) linkbase_W22S8_1.transferEnergy(linkto_W22S8);
        else if(linkbase_W22S8_2.cooldown == 0) linkbase_W22S8_2.transferEnergy(linkto_W22S8);
        else linkbase_W22S8_3.transferEnergy(linkto_W22S8);
    }

    var linkbase_W23S12 = Game.getObjectById('5ebdf6d91ba74871135b4bc0');
    var linkto_W23S12 = Game.getObjectById('5ebe186c26b7673a4ae868f9');
    if(linkto_W23S12.store.energy == 0) {linkbase_W23S12.transferEnergy(linkto_W23S12);}
    
    var base1 = Game.getObjectById('5eb5cb0d505937045f020767');
    var base2 = Game.getObjectById('5eb553d2a7d7c84181f3c070');
    var lab1 = Game.getObjectById('5eb58e85405c8ea6a54d653e');
    var lab2 = Game.getObjectById('5eb624ba7998fe0ddf55a410');
    var lab3 = Game.getObjectById('5eb6405b0ca530a8e52d5113');
    var lab4 = Game.getObjectById('5eb657c9663063dca91992fe');
    
    //labCtrl.run('W22S8', RESOURCE_HYDROXIDE, 20000);
    labCtrl.run('W23S12', RESOURCE_HYDROXIDE, 40000);

    var ob = Game.getObjectById('5ee152ce4b48f14c2e22c1ab');
    ob.observeRoom('W21S8');

    var factory = Game.getObjectById('5ec5738af4c123eab693ac43');
    factory.produce(RESOURCE_ENERGY);
    
    var powerspawn_W22S8 = Game.getObjectById('5ee12e48887b713a5aadb7f2');
    powerspawn_W22S8.processPower();
    
    
    /*
    const amountToSell = 2000, maxTransferEnergyCost = 2000;
    const orders = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_ENERGY});

    for(let i=0; i<orders.length; i++) {
        const transferEnergyCost = Game.market.calcTransactionCost(amountToSell, 'W22S8', orders[i].roomName);

        if(transferEnergyCost < maxTransferEnergyCost) {
            Game.market.deal(orders[i].id, amountToSell, "W22S8");
            break;
        }
    }
    */
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'drone') {
            drone.run(creep);
        }
        if(creep.memory.role == 'mdrone') {
            mdrone.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            upgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            /*
            var str = Game.getObjectById('5c72ff5f9e26a340e62f7095');
            if(creep.dismantle(str) == ERR_NOT_IN_RANGE){creep.moveTo(str);}
            */
           
            if(!creep.pos.inRangeTo(Game.flags.W22S8,24)) creep.moveTo(Game.flags.W22S8);
            else {builder.run(creep, 'STORAGE');}
            
            
           //manager.run(creep, '5eccf73763e57e8d958fce0d', '5eb657c9663063dca91992fe', RESOURCE_CATALYZED_KEANIUM_ALKALIDE, false, false);
        }
        if(creep.memory.role == 'scout') {
            scout.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            repairer.run(creep);
        }
        if(creep.memory.role == 'transporter') {
            transporter.run(creep);
        }
        if(creep.memory.role == 'queen' || creep.memory.role == 'smallqueen') {
            queen.run(creep);
        }
        if(creep.memory.role == 'charger') {
            charger.run(creep);
        }
        if(creep.memory.role == 'transmitter') {
            transmitter.run(creep);
        }
        if(creep.memory.role == 'guarder') {
            guarder.run(creep);
        }
        if(creep.memory.role == 'modern_transporter') {
            modern_transporter.run(creep, '5cd385c089f34a3b76473899', '5e8ad848acf3f319ef9cb795', 'ALL', false, false);
        }
        if(creep.memory.role == 'claimer') {
            //if(!creep.pos.inRangeTo(Game.flags.W23S12,20)) creep.moveTo(Game.flags.W23S12);
            claimer.run(creep);
        }
        if(creep.memory.role == 'attacker') {
            /*
            base2.boostCreep(creep);
            lab2.boostCreep(creep);
            base1.boostCreep(creep);
            lab4.boostCreep(creep);
            */
            attacker.run(creep, 'pos', 'GUARD');
        }
        if(creep.memory.role == 'attacker_drone') {
            /*
            base1.boostCreep(creep);
            lab2.boostCreep(creep);
            lab3.boostCreep(creep);
            */
            attacker_drone.run(creep, 'pos2', 'ATTACK');
        }
        if(creep.memory.role == 'manager' && creep.memory.room == 'W22S8'){
            var lab = getNotEmptyLab(creep);
            manager.run(creep, lab.id, '5e8ad848acf3f319ef9cb795', 'ALL', false, false, true);
        }
        if(creep.memory.role == 'manager' && creep.memory.room == 'W23S12'){
            //manager.run(creep, '5ecfd262b13b761e358a3b71', '5ecc85137e4d0c428bc08d55', 'ALL', false, false);
        }
        if(creep.memory.role == 'attacker_team_attacker') {
            var attacker_creep = creep;
            base1.boostCreep(creep);
            base2.boostCreep(creep);
            lab1.boostCreep(creep);
            lab2.boostCreep(creep);
            lab3.boostCreep(creep);
            lab4.boostCreep(creep);
        }
        if(creep.memory.role == 'attacker_team_healer') {
            var attacker_creep2 = creep;
            base1.boostCreep(creep);
            base2.boostCreep(creep);
            lab1.boostCreep(creep);
            lab2.boostCreep(creep);
            lab3.boostCreep(creep);
            lab4.boostCreep(creep);
        }
    }
    if(attacker_creep != undefined && attacker_creep2 != undefined)
        attacker_team.run(attacker_creep, attacker_creep2, 'pos3', 'MOVE');
    check.stateScanner();
}

function getAvaliableSpawn(room) {
    for (var spawnname in Game.spawns) {
        var spawn = Game.spawns[spawnname]
        if (spawn.room.name == room && spawn.spawning == null) {
            return spawn;
        }
    }
    return null;
}

function getNotEmptyLab(creep) {
    var lab = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (structure) => {
            return (structure.structureType == STRUCTURE_LAB &&
                    structure.mineralType != undefined);
        }
    });
    return lab;
}