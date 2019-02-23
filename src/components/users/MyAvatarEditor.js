import React from 'react'
import AvatarEditor from 'react-avatar-editor'
import { Label, Input } from 'reactstrap'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import { FormGroup } from 'reactstrap'
import Button from 'react-bootstrap/Button'


class MyAvatarEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            scale: 1,
            editorHidden: false,
            buttonHidden: true,
            imageURL: "",
        };
    }

    handleFileSelect = (e) =>
    {
        let file = e.target.files[0];
        const newState = {
            ...this.state,
            image: file,
        }
        this.setState(
            newState
        );
    }

    handleFileScaled = (value) =>
    {
        const newState = {
            ...this.state,
            scale: value/50,
        }
        this.setState(newState);
    }

    handleImageReady = (e) =>
    {
        this.setState({
            ...this.state,
            buttonHidden: false,
        });
    }

    onClickSave = () => {
        if (this.editor) {
            // This returns a HTMLCanvasElement, it can be made into a data URL or a blob, drawn on another canvas, or added to the DOM.
            const canvas = this.editor.getImage();
            let dataURL = canvas.toDataURL();

            this.setState({
                ...this.state,
                editorHidden: true,
                imageURL: dataURL,
            });

            this.props.transmitAvatar(dataURL);
        }
    }
    setEditorRef = (editor) => this.editor = editor

    render () {
        return (
            <FormGroup>
                <Label hidden={this.state.editorHidden}>Edit avatar</Label>
                <div hidden={this.state.editorHidden} >
                    <AvatarEditor
                        ref={this.setEditorRef}
                        image={this.state.image}
                        width={120}
                        height={120}
                        border={30}
                        borderRadius={100}
                        scale={this.state.scale}
                        onImageReady={this.handleImageReady}
                    />
                    <Input type="file" accept="image/*" onChange={ this.handleFileSelect } />
                    <div className="my-2">
                        <Slider min={1} max={100} defaultValue={50} onChange={ value => this.handleFileScaled(value) } />
                    </div>
                    <Button variant="outline-primary" onClick={this.onClickSave} hidden={this.state.buttonHidden}>Save</Button>
                </div>
                <img src={this.state.imageURL} alt="Avatar" style={{ width: "120px", borderRadius: "50%" }} hidden={!this.state.editorHidden} />
            </FormGroup>
        )
    }
}



export default MyAvatarEditor