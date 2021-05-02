import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export const Button = motion.custom(styled.button`
  outline: none !important;
  ${tw`py-2 px-8 rounded-full border border-indigo-500 text-white`};

  ${({ primary }) => (primary ? tw`bg-indigo-500` : tw`text-indigo-500`)};

  ${({ block }) => block && tw`w-full`};
`);
