import * as React from "react";
import { motion } from "framer-motion";
import  MenuLinks  from "../MenuLinks";
import SignInButton from "../SignInButton";
//import SignUpButton from "../SignUpButton";
import FindPorkJoint from "../FindPorkJoint";
//import { useSelector } from "react-redux";
//import { selectUser } from "./features/userSlice";
//import LogoutButton from "../LogoutButton";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = ({ toggle }) => {
  const user = useSelector(selectUser);
  const [showMenuCategories, setShowMenuCategories] = React.useState(false);

  return (
    <>
      {showMenuCategories ? (
        <motion.ul variants={variants}>
          <MenuLinks
            link="Menu"
            goBackIcon
            onClick={() => {
              setShowMenuCategories(false);
            }}
            width="60%"
          />
          <MenuLinks
            link="All products"
            path="/menu"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuLinks
            link="Featured"
            path="/menu/featured"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuLinks
            link="Previous Orders"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuLinks
            link="Favorite Products"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
        </motion.ul>
      ) : (
        <motion.ul variants={variants}>
          <MenuLinks
            link="Menu"
            icon
            onClick={() => setShowMenuCategories(true)}
          />
          <MenuLinks link="Rewards" />
          <MenuLinks link="Gift Cards" />
          <motion.hr variants={variants2} />
          <motion.div className="navigation__buttons" variants={variants2}>
            {!user ? (
              <>
                <SignInButton />
                <SignUpButton />
              </>
            ) : (
              <LogoutButton />
            )}
          </motion.div>
          <motion.div variants={variants2}>
            <FindAStore />
          </motion.div>
        </motion.ul>
      )}
    </>
  );
};
