import Alpine from 'alpinejs'

Alpine.data('anyComponent', function (initial: number = 0) {
          return {
                    compteur: initial,
                    increment () {
                              this.compteur += 1
                              this.getCompteur()
                    },
                    decrement () {
                              this.compteur -= 1
                              if(this.compteur < 0) {
                                        (this.$el as HTMLSpanElement).style.display = "none"
                              }
                    },
                    getCompteur() {
                              return this.compteur
                    }
          }
})
Alpine.start()