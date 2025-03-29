export default function Form() {
  return (
    <div className="row form">
      <div className="col s10 offset-s1 center">
        <div className="col l5 12">
          <h4>Title</h4>
          <span>Description</span>
        </div>
        <div className="col l5 s12">
          <form>
            <div className="input-field">
              <input id="name" type="text" className="validate" />
              <label for="name">Name</label>
            </div>
            <div className="input-field">
              <input id="email" type="email" className="validate" />
              <label for="email">Email</label>
            </div>
            <div className="input-field">
              <input id="phone" type="tel" className="validate" />
              <label for="phone">Phone</label>
            </div>
            <div>
              <label>Select your insurance type: </label>
              <select name="" id="">
                <option value="">Choose...</option>
                <option value="private">private</option>
                <option value="public">public</option>
                <option value="other province">other province</option>
              </select>
            </div>
            <div className="input-field">
              <input type="file" id="RAMQ-upload" style={{ display: "none" }} />
              <label for="phone">Upload your RAMQ (JPEG or PDF)</label>

              <button className="btn waves-effect waves-light">Upload</button>
            </div>
            {/* Insurance Type private vs public vs other province */}
            {/* upload x-ray images  PDF or JPEG */}
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
