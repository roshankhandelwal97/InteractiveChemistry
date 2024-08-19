const pureLipids = {
  title: "Membrane", 
  content: "Explore the complex and fascinating world of cellular membranes.",
  molecules: [
    {
      name: "POPC",
      chemName: "1-palmitoyl-2-oleoyl-sn-glycero-3-phosphocholine",
      description: "Click 'Explore' to view the membrane structure consisting of 200 POPC molecules on both leaflets, and to watch the animation on MD simulation of the membrane.",
      image: "/lipids/pureLipids/popc.pdb",
      singleStructure: "Y",
      files: [
        {
          displayName: "POPC",
          description: "The structure displayed on the left represents a single POPC molecule, while the right side illustrates the animation of a molecular dynamics (MD) simulation involving a membrane composed of 200 POPC molecules per leaflet, immersed in water and ions. The simulation was conducted over a duration of 200 ns. Water and ions are not shown due to clarity. Phosphorous atoms are shown as yellow sphere.",
          paths: {
            path1: {
              link: "/lipids/pureLipids/popc.pdb",
              title: "Single POPC",
              singleStructure: "Y"
            },
            path2: {
              link: "/lipids/pureLipids/200_POPC_initial.pdb",
              title: "200 POPC",
              singleStructure: "N"
            }
          },
          animations: {
            link: "/animations/POPC.pdb",
            title: "200 POPC"
          }
        }
      ]
    },
    {
      name: "DPPC",
      chemName: "1,2-dipalmitoyl-sn-glycero-3-phosphocholine",
      description: "Click 'Explore' to view the membrane structure consisting of 200 DPPC molecules on both leaflets, and to watch the animation on MD simulation of the membrane.",
      image: "/lipids/pureLipids/single_DPPC_initial.pdb",
      singleStructure: "Y",
      files: [
        {
          displayName: "DPPC",
          description: "The structure displayed on the left represents a single POPC molecule, while the right side illustrates the animation of a molecular dynamics (MD) simulation involving a membrane composed of 200 DPPC molecules per leaflet, immersed in water and ions. The simulation was conducted over a duration of 200 ns. Water and ions are not shown due to clarity. Phosphorous atoms are shown as yellow sphere.",
          paths: {
            path1: {
              link: "/lipids/pureLipids/single_DPPC_initial.pdb",
              title: "Single DPPC", 
              singleStructure: "Y"
            },
            path2: {
              link: "/lipids/pureLipids/200_DPPC_initial.pdb",
              title: "200 DPPC",
              singleStructure: "N"
            }
          },
          animations: {
            link: "/animations/DPPC.pdb",
            title: "200 DPPC"
          }
        }
      ]
    },
    {
      name: "Mixtures of different type of lipids",
      description: "Click 'Explore' to view the membrane structure consisting of mixutres of different types of lipids molecules on both leaflets, and to watch the animation on MD simulation of the membrane.",
      image: "/lipids/pureLipids/asymm_membrane_npt_200.pdb",
      singleStructure: "Y",
      files: [
        {
          displayName: "Mixtures of different type of lipids",
          description: "The membrane is composed of six distinct lipid types: POPC, POPE, PSM, POPS, PIP2, and CHOL. The structure of each lipid is shown above. In the upper leaflet, the lipid composition is distributed in a ratio of 41:8:23:4:4:20, respectively, while in the lower leaflet, with a ratio of 11:37:5:16:10:21. The system is simulated in water and ion environment for 1.2 us.",
          paths: {
            path1: {
              link: "/lipids/pureLipids/POPC.pdb",
              title: "POPC",
              singleStructure: "Y"
            },
            path2: {
              link: "/lipids/pureLipids/pope.pdb",
              title: "POPE",
              singleStructure: "Y"
            },
            path3: {
              link: "/lipids/pureLipids/psm.pdb",
              title: "PSM",
              singleStructure: "Y"
            },
            path4: {
              link: "/lipids/pureLipids/pops.pdb",
              title: "POPS",
              singleStructure: "Y"
            },
            path5: {
              link: "/lipids/pureLipids/pip2.pdb",
              title: "PIP2",
              singleStructure: "Y"
            },
            path6: {
              link: "/lipids/pureLipids/chol.pdb",
              title: "CHOL",
              singleStructure: "Y"
            },

            // path2: {
            //   link: "/lipids/pureLipids/popcgm1.pdb",
            //   title: "POPC-GM1",
            //   singleStructure: "N"
            // },
            // path3: {
            //   link: "/lipids/pureLipids/POPC.pdb",
            //   title: "POPC",
            //   singleStructure: "Y"
            // },
            path7: {
              link: "/lipids/pureLipids/asymm_membrane_npt_200.pdb",
              title: "Asymmetric Plasma Membrane",
              singleStructure: "N"
            },

          },
          animations: {
            link: "/animations/Asymmetric.pdb",
            title: "Asymmetric Plasma Membrane"
          }
        }
      ]
    }

  ]
};
export default pureLipids;


// {
//   name: "Mixtures",
//   description: "Some Interesting Facts about DPPC",
//   image: "/lipids/pureLipids/asymm_membrane_npt_200.pdb",
//   singleStructure: "Y",
//   files: [
//     {
//       displayName: "Mixtures",
//       description: "Lorem I",
//       paths: {
//         path1: {
//           link: "/lipids/pureLipids/POPC.pdb",
//           title: "POPC",
//           singleStructure: "Y"
//         },
//         path2: {
//           link: "/lipids/pureLipids/popcgm1.pdb",
//           title: "POPC-GM1",
//           singleStructure: "N"
//         },
//         path3: {
//           link: "/lipids/pureLipids/POPC.pdb",
//           title: "POPC",
//           singleStructure: "Y"
//         },
//         path4: {
//           link: "/lipids/pureLipids/chol.pdb",
//           title: "CHOL",
//           singleStructure: "Y"
//         },
//         path5: {
//           link: "/lipids/pureLipids/pope.pdb",
//           title: "POPE",
//           singleStructure: "Y"
//         },
//         path6: {
//           link: "/lipids/pureLipids/psm.pdb",
//           title: "PSM",
//           singleStructure: "Y"
//         },
//         path7: {
//           link: "/lipids/pureLipids/pops.pdb",
//           title: "POPS",
//           singleStructure: "Y"
//         },
//         path8: {
//           link: "/lipids/pureLipids/asymm_membrane_npt_200.pdb",
//           title: "Asymmetric Plasma Membrane",
//           singleStructure: "N"
//         },
//         path9: {
//           link: "/lipids/pureLipids/rat_liver_membrane.pdb",
//           title: "Rat Liver Membrane",
//           singleStructure: "N"
//         }
//       },
//       animations: {
//         link: "/animations/0-10_system_nowat-ion.pdb",
//         title: "Single DPPC"
//       }
//     }
//   ]
// }