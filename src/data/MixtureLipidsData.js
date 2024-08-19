const MixtureLipidsData = {
  title: "Polystyrene", 
  content: "Explore the complex and fascinating world of cellular membranes.",
  molecules: [
    {
      name: "POPC with Polystyrene",
      chemName: "1-palmitoyl-2-oleoyl-sn-glycero-3-phosphocholine with polystyrene",
      description: "Click 'Explore' to view the membrane structure consisting of 200 POPC with Polystyrene molecules on both leaflets, and to watch the animation on MD simulation of the membrane.",
      image: "/lipids/mixtureLipids/popc_poly_nowat_ion.pdb",
      singleStructure: "N",
      files: [
        {
          displayName: "POPC with Polystyrene",
          description: "The structures of POPC, polystyrene and the system consisting of 200 POPC in each leaflet, PS, water, and ions are shown above. The system is simulated for 1.2 us. Water and ions are not shown due to clarity.",
          paths: {
            path1: {
              link: "/lipids/pureLipids/popc.pdb",
              title: "Single POPC",
              singleStructure: "Y",
            },
            path2: {
              link: "/lipids/mixtureLipids/polystyrene.pdb",
              title: "Polystyrene",
              singleStructure: "Y"
            },
            path3: {
              link: "/lipids/mixtureLipids/popc_poly_nowat_ion.pdb",
              title: "200 POPC with Polystyrene",
              singleStructure: "N"
            }
          },
          animations: {
            link: "/animations/popcwpoly.pdb",
            title: "200 POPC with Polystyrene"
          }
        }
      ]
    },
    {
      name: "DPPC with Polystyrene",
      chemName: "1,2-dipalmitoyl-sn-glycero-3-phosphocholine with polystyrene",
      description: "Click 'Explore' to view the membrane structure consisting of 200 DPPC with Polystyrene molecules on both leaflets, and to watch the animation on MD simulation of the membrane.",
      image: "/lipids/mixtureLipids/dppc_poly_nowat_ion.pdb",
      singleStructure: "N",
      files: [
        {
          displayName: "DPPC with Polystyrene",
          description: "The structures of DPPC, polystyrene and the system consisting of 200 DPPC in each leaflet, PS, water, and ions are shown above. The system is simulated for 1.2 us. Water and ions are not shown due to clarity.",
          paths: {
            path1: {
              link: "/lipids/pureLipids/single_DPPC_initial.pdb",
              title: "Single DPPC",
              singleStructure: "Y",
            },
            path2: {
              link: "/lipids/mixtureLipids/polystyrene.pdb",
              title: "Polystyrene",
              singleStructure: "Y"
            },
            path3: {
              link: "/lipids/mixtureLipids/dppc_poly_nowat_ion.pdb",
              title: "200 DPPC with Polystyrene",
              singleStructure: "N"
            }
          },
          animations: {
            link: "/animations/ddpcwpoly.pdb",
            title: "200 DPPC with Polystyrene"
          }
        }
      ]
    },
    {
      name: "Asymmetric Plasma Membrane with Polystyrene",
      description: "Click 'Explore' to view the membrane structure consisting of Asymmetric Plasma Membrane with Polystyrene, and to watch the animation on MD simulation of the membrane.",
      image: "/lipids/mixtureLipids/asymm_poly_nowat_ion.pdb",
      singleStructure: "N",
      files: [
        {
          displayName: "Asymmetric Plasma Membrane with Polystyrene",
          description: "The structures of Asymmetric Plasma Membrane, polystyrene and the system consisting of 6 different types of lipids, PS, water, and ions are shown above. The system is simulated for 1.2 us. Water and ions are not shown due to clarity.",
          paths: {
            path1: {
              link: "/lipids/pureLipids/asymm_membrane_npt_200.pdb",
              title: "Asymmetric Plasma Membrane",
              singleStructure: "N"
            },
            path2: {
              link: "/lipids/mixtureLipids/polystyrene.pdb",
              title: "Polystyrene",
              singleStructure: "Y"
            },
            path3: {
              link: "/lipids/mixtureLipids/asymm_poly_nowat_ion.pdb",
              title: "Asymmetric Plasma Membrane with Polystyrene",
              singleStructure: "N"
            }
          },
          animations: {
            link: "/animations/Asymmetricwpoly.pdb",
            title: "Asymmetric Plasma Membrane with Polystyrene"
          }
        }
      ]
    },
    // {
    //   name: "Rat Liver Membrane with Polystyrene",
    //   description: "Some Interesting Facts about DPPC",
    //   image: "lipids/mixtureLipids/rat_liver_poly_nowat_ion.pdb",
    //   singleStructure: "N",
    //   files: [
    //     {
    //       displayName: "Rat Liver Membrane with Polystyrene",
    //       description: "Lorem I",
    //       paths: {
    //         path1: {
    //           link: "/lipids/pureLipids/rat_liver_membrane.pdb",
    //           title: "Rat Liver Membrane",
    //           singleStructure: "N"
    //         },
    //         path2: {
    //           link: "/lipids/mixtureLipids/polystyrene.pdb",
    //           title: "Polystyrene",
    //           singleStructure: "Y"

    //         },
    //         path3: {
    //           link: "/lipids/mixtureLipids/rat_liver_poly_nowat_ion.pdb",
    //           title: "Rat Liver Membrane with Polystyrene",
    //           singleStructure: "N"
    //         }
    //       },
    //       animations: {
    //         link: "/animations/Rat_liverwpoly.pdb",
    //         title: "Rat Liver Membrane with Polystyrene"
    //       }
    //     }
    //   ]
    // }

  ]
};
export default MixtureLipidsData;
