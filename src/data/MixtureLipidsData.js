const MixtureLipidsData = {
  title: "Polystyrene", 
  content: "Explore the complex and fascinating world of cellular membranes.",
  molecules: [
    {
      name: "POPC with Polystyrene",
      description: "Some Interesting Facts about POPC",
      image: "/lipids/mixtureLipids/popc_poly_nowat_ion.pdb",
      singleStructure: "N",
      files: [
        {
          displayName: "POPC with Polystyrene",
          description: "Lorem Ipsum is simply",
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
            link: "/animations/0-10_system_nowat-ion.pdb",
            title: "Single POPC"
          }
        }
      ]
    },
    {
      name: "DPPC with Polystyrene",
      description: "Some Interesting Facts about DPPC",
      image: "/lipids/mixtureLipids/dppc_poly_nowat_ion.pdb",
      singleStructure: "N",
      files: [
        {
          displayName: "DPPC with Polystyrene",
          description: "Lorem I",
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
            link: "/animations/0-10_system_nowat-ion.pdb",
            title: "Single DPPC"
          }
        }
      ]
    },
    {
      name: "Asymmetric Plasma Membrane with Polystyrene",
      description: "Some Interesting Facts about DPPC",
      image: "/lipids/mixtureLipids/asymm_poly_nowat_ion.pdb",
      singleStructure: "N",
      files: [
        {
          displayName: "Asymmetric Plasma Membrane with Polystyrene",
          description: "Lorem I",
          paths: {
            path1: {
              link: "/lipids/pureLipids/POPC.pdb",
              title: "Asymmetric Plasma Membrane",
              singleStructure: "Y"
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
            link: "/animations/0-10_system_nowat-ion.pdb",
            title: "Single DPPC"
          }
        }
      ]
    },
    {
      name: "Rat Liver Membrane with Polystyrene",
      description: "Some Interesting Facts about DPPC",
      image: "lipids/mixtureLipids/rat_liver_poly_nowat_ion.pdb",
      singleStructure: "N",
      files: [
        {
          displayName: "Rat Liver Membrane with Polystyrene",
          description: "Lorem I",
          paths: {
            path1: {
              link: "/lipids/pureLipids/POPC.pdb",
              title: "Rat Liver Membrane",
              singleStructure: "Y"
            },
            path2: {
              link: "/lipids/mixtureLipids/polystyrene.pdb",
              title: "Polystyrene",
              singleStructure: "Y"

            },
            path3: {
              link: "/lipids/mixtureLipids/rat_liver_poly_nowat_ion.pdb",
              title: "Rat Liver Membrane with Polystyrene",
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
export default MixtureLipidsData;
