const id = Symbol("id");

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

alumno[id] = Math.floor(Math.random() * 9999);
alert(alumno[id]);
