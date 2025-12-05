let alumno = {
    edad: 18,
    admin: "false",
    stats: {
        post: 0,
        followers: 0
    },
    incrementarStats: function(tipo, n) {
        if (this.stats?.[tipo] != undefined) {
            if (typeof n == "number" && !isNaN(n)) {
                this.stats[tipo] += n;
            }
        }
    }
};

alumno.incrementarStats("post", 2);
alert(alumno.stats.post);