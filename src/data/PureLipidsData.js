const pureLipids = {
  title: "Membrane", 
  content: "Explore the complex and fascinating world of cellular membranes.",
  molecules: [
    {
      name: "POPC",
      description: "Some Interesting Facts about POPC",
      image: "/images/pureLipids/popc.png",
      files: [
        {
          displayName: "POPC",
          description: "Lorem Ipsum is simply",
          paths: {
            path1: {
              link: "/lipids/pureLipids/popc.pdb",
              title: "Single POPC"
            },
            path2: {
              link: "/lipids/pureLipids/200_POPC_initial.pdb",
              title: "200 POPC"
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
      image: "/images/pureLipids/dppc.png",
      files: [
        {
          displayName: "DPPC",
          description: "Lorem I",
          paths: {
            path1: {
              link: "/lipids/pureLipids/single_DPPC_initial.pdb",
              title: "Single DPPC"
            },
            path2: {
              link: "/lipids/pureLipids/200_DPPC_initial.pdb",
              title: "200 DPPC"
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
      image: "/images/pureLipids/psm.png",
      files: [
        {
          displayName: "Mixtures",
          description: "Lorem I",
          paths: {
            path1: {
              link: "/lipids/pureLipids/POPC.pdb",
              title: "POPC"
            },
            path2: {
              link: "/lipids/pureLipids/chol.pdb",
              title: "CHOL"
            },
            path3: {
              link: "/lipids/pureLipids/pope.pdb",
              title: "POPE"
            },
            path4: {
              link: "/lipids/pureLipids/psm.pdb",
              title: "PSM"
            },
            path5: {
              link: "/lipids/pureLipids/pops.pdb",
              title: "POPS"
            },
            path6: {
              link: "/lipids/pureLipids/asymm_membrane_npt_200.pdb",
              title: "Asymmetric Plasma Membrane"
            },
            path7: {
              link: "/lipids/pureLipids/rat_liver_membrane.pdb",
              title: "Rat Liver Membrane"
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
