export default function wizardGlobalStateManager() {
    let instance = null;
  
    function createInstance() {
      let nbTalkedWizard = 0;
  
      return {
        setNbTalkedWizard(value) {
          nbTalkedWizard = value;
        },
        getNbTalkedWizard: () => nbTalkedWizard,
      };
    }
  
    return {
      getInstance() {
        if (!instance) {
          instance = createInstance();
        }
  
        return instance;
      },
    };
  }
  