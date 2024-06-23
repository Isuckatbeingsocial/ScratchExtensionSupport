!function() {
let vm = document.getElementById("app")._reactRootContainer._internalRoot.current.child.pendingProps.store.getState().scratchGui.vm;

class scratch {
    constructor() {
        this.vm = 
        this.extensions = {
            register: function(e) {
                vm.extensionManager._registerInternalExtension(e);
            },
            unsandboxed: true
        }

        this.ArgumentType = {
            "ANGLE": "angle",
            "BOOLEAN": "Boolean",
            "COLOR": "color",
            "NUMBER": "number",
            "STRING": "string",
            "MATRIX": "matrix",
            "NOTE": "note",
            "IMAGE": "image",
            "COSTUME": "costume",
            "SOUND": "sound"
        }
        this.BlockType = {
            "BOOLEAN": "Boolean",
            "BUTTON": "button",
            "LABEL": "label",
            "COMMAND": "command",
            "CONDITIONAL": "conditional",
            "EVENT": "event",
            "HAT": "hat",
            "LOOP": "loop",
            "REPORTER": "reporter",
            "XML": "xml"
        }
    }

    canEmbed() {
        return true;
    }

    canFetch() {
        return true;
    }

    canGeolocate() {
        return true;
    }

    canOpenWindow() {
        return true;
    }

    canReadClipboard() {
        return true;
    }

    canRecordAudio() {
        return true;
    }

    canRecordVideo() {
        return true;
    }

    canRedirect() {
        return true;
    }
}

window['Scratch'] = new scratch();
}
