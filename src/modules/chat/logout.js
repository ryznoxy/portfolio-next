"use client";
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiShow, BiHide, BiExit } from "react-icons/bi";
import Image from "next/image";
import { useState } from "react";
import { MdVerified } from "react-icons/md";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

const Logout = () => {
  const [user] = useAuthState(auth);
  const [emailShow, setEmailShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const authorEmail = process.env.NEXT_PUBLIC_AUTHOR_EMAIL;

  const handleOpenChange = () => {
    setIsOpen((value) => !value);
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className="flex justify-between md:flex-row flex-col items-center mt-5 ">
        <div className="flex items-center gap-2">
          <Image
            src={user?.photoURL}
            alt={user?.displayName}
            width={50}
            height={50}
            className="rounded-full w-[40px] h-[40px] "
          />
          <div className="space-y-1">
            <div className="flex gap-2 text-sm items-center">
              <p className="line-clamp-1">{user?.displayName}</p>
              {user?.email === authorEmail && (
                <MdVerified className="text-blue-500" />
              )}
            </div>
            <div className="flex gap-2">
              {emailShow ? (
                <p className="cursor-pointer text-xs">{user?.email}</p>
              ) : (
                <div className="w-40  h-5 rounded-lg bg-neutral-200 dark:bg-neutral-700"></div>
              )}
              <div>
                {emailShow ? (
                  <BiHide
                    size={24}
                    className="cursor-pointer"
                    onClick={() => setEmailShow(false)}
                  />
                ) : (
                  <BiShow
                    size={24}
                    className="cursor-pointer"
                    onClick={() => setEmailShow(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleOpenChange}
          className="cursor-pointer md:text-red-500 text-white  flex gap-1 items-center text-sm px-3 md:p-0 py-1 rounded-lg md:bg-transparent bg-red-500 mt-2 md:mt-0"
        >
          Sign out
          <BiExit size={20} />
        </button>
        {/* modal */}
        <Modal
          backdrop="blur"
          className="rounded-md "
          isOpen={isOpen}
          onOpenChange={handleOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 ">
                  Sign Out?
                </ModalHeader>
                <ModalBody>
                  <p>You can always sign back in at any time.</p>
                </ModalBody>
                <ModalFooter className="flex justify-center flex-col gap-2">
                  <button
                    className="rounded-md px-3 py-2 border dark:border-neutral-600 bg-red-500 text-white"
                    onClick={() => handleSignOut()}
                  >
                    Sign Out
                  </button>
                  <button
                    className="rounded-md px-3 py-2 border dark:border-neutral-600 bg-white dark:bg-transparent "
                    onClick={onClose}
                  >
                    Close
                  </button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default Logout;
