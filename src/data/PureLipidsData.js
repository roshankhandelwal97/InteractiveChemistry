const pureLipids = {
  title: "Membrane", 
  content: "Explore the complex and fascinating world of cellular membranes.",
  molecules: [
    {
      name: "POPC",
      description: "Some Interesting Facts about POPC",
      image: "/lipids/pureLipids/popc.pdb",
      singleStructure: "Y",
      files: [
        {
          displayName: "POPC",
          description: "Lorem Ipsum is simply",
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
            link: "/animations/0-10_system_nowat-ion.pdb",
            title: "Single POPC"
          }
        }
      ]
    },
    {
      name: "DPPC",
      description: "Some Interesting Facts about DPPC",
      image: "/lipids/pureLipids/single_DPPC_initial.pdb",
      singleStructure: "Y",
      files: [
        {
          displayName: "DPPC",
          description: "Lorem I",
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
            link: "/animations/0-10_system_nowat-ion.pdb",
            title: "Single DPPC"
          }
        }
      ]
    },
    {
      name: "Mixtures",
      description: "Some Interesting Facts about DPPC",
      image: "/lipids/pureLipids/pope.pdb",
      singleStructure: "Y",
      files: [
        {
          displayName: "Mixtures",
          description: "Lorem I",
          paths: {
            path1: {
              link: "/lipids/pureLipids/POPC.pdb",
              title: "POPC",
              singleStructure: "Y"
            },
            path2: {
              link: "/lipids/pureLipids/chol.pdb",
              title: "CHOL",
              singleStructure: "Y"
            },
            path3: {
              link: "/lipids/pureLipids/pope.pdb",
              title: "POPE",
              singleStructure: "Y"
            },
            path4: {
              link: "/lipids/pureLipids/psm.pdb",
              title: "PSM",
              singleStructure: "Y"
            },
            path5: {
              link: "/lipids/pureLipids/pops.pdb",
              title: "POPS",
              singleStructure: "Y"
            },
            path6: {
              link: "/lipids/pureLipids/asymm_membrane_npt_200.pdb",
              title: "Asymmetric Plasma Membrane",
              singleStructure: "N"
            },
            path7: {
              link: "/lipids/pureLipids/rat_liver_membrane.pdb",
              title: "Rat Liver Membrane",
              singleStructure: "N"
            }
          },
          animations: {
            link: "/animations/0-10_system_nowat-ion.pdb",
            title: "Single DPPC"
          }
        }
      ]
    }

  ]
};
export default pureLipids;
