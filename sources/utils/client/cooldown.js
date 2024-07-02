module.exports = async (command, db, member) => {
    try {
        const owner = process.env.owner;
        if (member.id == owner) return false;

        const now = Date.now();
        const duration = (command.cooldown || 1) * 1000;
        const time = await db.get(`${command.name}_${member.id}`) || 0;

        if (time && now < time + duration) {
            const next = Math.round((time + duration - now) / 1000);
            
            return next;
        }

        else {
            await db.set(`${command.name}_${member.id}`, now);

            setTimeout(async () => {
                await db.delete(`${command.name}_${member.id}`);
            }, duration);

            return false;
        };
    } 
    
    catch (error) { return; };
};