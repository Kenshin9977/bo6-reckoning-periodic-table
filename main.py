import flet as ft

PERIODIC_TABLE = {
    "H": (1, "Hydrogène"), "He": (2, "Hélium"), "Li": (3, "Lithium"), "Be": (4, "Béryllium"),
    "B": (5, "Bore"), "C": (6, "Carbone"), "N": (7, "Azote"), "O": (8, "Oxygène"), "F": (9, "Fluor"),
    "Ne": (10, "Néon"), "Na": (11, "Sodium"), "Mg": (12, "Magnésium"), "Al": (13, "Aluminium"),
    "Si": (14, "Silicium"), "P": (15, "Phosphore"), "S": (16, "Soufre"), "Cl": (17, "Chlore"),
    "Ar": (18, "Argon"), "K": (19, "Potassium"), "Ca": (20, "Calcium"), "Sc": (21, "Scandium"),
    "Ti": (22, "Titane"), "V": (23, "Vanadium"), "Cr": (24, "Chrome"), "Mn": (25, "Manganèse"),
    "Fe": (26, "Fer"), "Co": (27, "Cobalt"), "Ni": (28, "Nickel"), "Cu": (29, "Cuivre"),
    "Zn": (30, "Zinc"), "Ga": (31, "Gallium"), "Ge": (32, "Germanium"), "As": (33, "Arsenic"),
    "Se": (34, "Sélénium"), "Br": (35, "Brome"), "Kr": (36, "Krypton"), "Rb": (37, "Rubidium"),
    "Sr": (38, "Strontium"), "Y": (39, "Yttrium"), "Zr": (40, "Zirconium"), "Nb": (41, "Niobium"),
    "Mo": (42, "Molybdène"), "Tc": (43, "Technétium"), "Ru": (44, "Ruthénium"), "Rh": (45, "Rhodium"),
    "Pd": (46, "Palladium"), "Ag": (47, "Argent"), "Cd": (48, "Cadmium"), "In": (49, "Indium"),
    "Sn": (50, "Étain"), "Sb": (51, "Antimoine"), "Te": (52, "Tellure"), "I": (53, "Iode"),
    "Xe": (54, "Xénon"), "Cs": (55, "Césium"), "Ba": (56, "Baryum"), "La": (57, "Lanthane"),
    "Ce": (58, "Cérium"), "Pr": (59, "Praséodyme"), "Nd": (60, "Néodyme"), "Pm": (61, "Prométhium"),
    "Sm": (62, "Samarium"), "Eu": (63, "Europium"), "Gd": (64, "Gadolinium"), "Tb": (65, "Terbium"),
    "Dy": (66, "Dysprosium"), "Ho": (67, "Holmium"), "Er": (68, "Erbium"), "Tm": (69, "Thulium"),
    "Yb": (70, "Ytterbium"), "Lu": (71, "Lutécium"), "Hf": (72, "Hafnium"), "Ta": (73, "Tantale"),
    "W": (74, "Tungstène"), "Re": (75, "Rhénium"), "Os": (76, "Osmium"), "Ir": (77, "Iridium"),
    "Pt": (78, "Platine"), "Au": (79, "Or"), "Hg": (80, "Mercure"), "Tl": (81, "Thallium"),
    "Pb": (82, "Plomb"), "Bi": (83, "Bismuth"), "Po": (84, "Polonium"), "At": (85, "Astate"),
    "Rn": (86, "Radon"), "Fr": (87, "Francium"), "Ra": (88, "Radium"), "Ac": (89, "Actinium"),
    "Th": (90, "Thorium"), "Pa": (91, "Protactinium"), "U": (92, "Uranium"), "Np": (93, "Neptunium"),
    "Pu": (94, "Plutonium"), "Am": (95, "Américium"), "Cm": (96, "Curium"), "Bk": (97, "Berkélium"),
    "Cf": (98, "Californium"), "Es": (99, "Einsteinium"), "Fm": (100, "Fermium"), "Md": (101, "Mendélévium"),
    "No": (102, "Nobélium"), "Lr": (103, "Lawrencium"), "Rf": (104, "Rutherfordium"), "Db": (105, "Dubnium"),
    "Sg": (106, "Seaborgium"), "Bh": (107, "Bohrium"), "Hs": (108, "Hassium"), "Mt": (109, "Meitnerium"),
    "Ds": (110, "Darmstadtium"), "Rg": (111, "Roentgenium"), "Cn": (112, "Copernicium"),
    "Nh": (113, "Nihonium"), "Fl": (114, "Flérovium"), "Mc": (115, "Moscovium"), "Lv": (116, "Livermorium"),
    "Ts": (117, "Tennessine"), "Og": (118, "Oganesson"),
}

def main(page: ft.Page):
    page.title = "Code Quête"
    page.vertical_alignment = ft.MainAxisAlignment.CENTER
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    def auto_validate(e):
        """Valide l'entrée automatiquement et affiche le résultat."""
        s1 = input1.value or ""
        s2 = input2.value or ""
        
        symbol = (s1 + s2).capitalize()
        
        if symbol in PERIODIC_TABLE:
            atomic_number, name = PERIODIC_TABLE[symbol]
            code = str(atomic_number).zfill(3)
            result_text.value = f"{symbol} - {name}\nNuméro atomique: {atomic_number}\nCode: {code}"
        else:
            # Si le symbole complet n'est pas trouvé, on vide le résultat
            result_text.value = "Élément inconnu"
        page.update()

    def reset_fields(e):
        """Réinitialise tous les champs."""
        input1.value = ""
        input2.value = ""
        result_text.value = ""
        input1.focus()
        page.update()

    def on_input1_change(e):
        """Passe au champ suivant et valide."""
        if e.control.value:
            input2.focus()
        auto_validate(e)

    # --- Définition des contrôles ---
    
    input1 = ft.TextField(
        label="1ère lettre (Daiquiri)",
        width=120,
        max_length=1,
        capitalization=ft.TextCapitalization.CHARACTERS,
        on_change=on_input1_change,
        autofocus=True,
    )
    
    input2 = ft.TextField(
        label="2ème lettre (Tableau périodique)",
        width=120,
        max_length=1,
        capitalization=ft.TextCapitalization.CHARACTERS,
        on_change=auto_validate, # Appelle directement la validation
    )

    reset_button = ft.OutlinedButton(
        on_click=reset_fields, 
        icon=ft.Icons.REFRESH
    )
    
    result_text = ft.Text(size=16, text_align=ft.TextAlign.CENTER)

    # --- Ajout des contrôles à la page ---

    page.add(
        ft.Column(
            [
                ft.Row(
                    [
                        input1,
                        input2,
                        reset_button,
                    ],
                    alignment=ft.MainAxisAlignment.CENTER,
                ),
                ft.Container(
                    content=result_text,
                    margin=ft.margin.only(top=20)
                )
            ],
            horizontal_alignment=ft.CrossAxisAlignment.CENTER,
        )
    )

ft.app(target=main)
