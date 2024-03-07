import mongoose from "mongoose";
import bcrypt from "bcrypt";
// import crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    user_image: {
      type: String,
      default:
        "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    mobile: {
      type: String,

    },
    password: {
      type: String,
      
    },
    roles: {
      type: String,
      default: "user",
    },
    isblocked: {
      type: Boolean,
      default: false,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    stripe_account_id: String,
    stripe_seller: {},
    stripeSession: {},
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.isPasswordMatched = async function (enterpassword) {
  return await bcrypt.compare(enterpassword, this.password);
};

// userSchema.methods.createPasswordResetToken = async function () {
//   const resettoken = crypto.randomBytes(32).toString("hex");
//   this.passwordResetToken = crypto
//     .createHash("sha256")
//     .update(resettoken)
//     .digest("hex");
//     this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
//   return resettoken;
// };

const User = mongoose.model("User", userSchema);

export default User;
