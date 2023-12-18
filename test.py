my_dict = {
    'key' : 5-3
}

my_dict['test'] = 'fsdf'

class Exemple:
    def __init__(mon_instance, valeur):
        mon_instance.valeur = valeur

    def afficher(self):
        self.test = 5+5
        return self.test

objet = Exemple(5)
objet.afficher()
print(objet.test)  # Affiche 5