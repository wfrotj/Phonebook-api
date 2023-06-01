import mongoose from "mongoose";

const personSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    number: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

personSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;

    // Format timestamps to a custom format
    returnedObject.dateCreated = new Date(
      returnedObject.createdAt
    ).toLocaleString();
    returnedObject.updated_at = new Date(
      returnedObject.updatedAt
    ).toLocaleString();

    delete returnedObject.createdAt;
    delete returnedObject.updatedAt;
  },
});
const Person = mongoose.model("Person", personSchema);

export default Person;
