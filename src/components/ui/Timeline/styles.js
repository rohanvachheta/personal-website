import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Timeline = styled.div`
  ${tw`flex flex-col sm:flex-row w-full p-4 relative border-l border-indigo-200`};

  &:last-child {
    ${tw`pb-0`};
  }
`;

export const Details = styled.div`
  ${tw`w-full sm:w-1/3`};
`;

export const Content = styled.div`
  ${tw`w-full sm:w-2/3 mt-4 sm:mt-0`};
`;

export const Title = styled.a`
  ${tw`font-semibold mt-3 `};
  cursor: pointer;
  ${tw`m-0 text-indigo-900 bg-white`};

  &:hover {
    opacity: 0.9;
    ${tw`m-0 text-indigo-900 bg-white`};
  }
`;

export const Subtitle = styled.div`
  ${tw`text-xs`};
`;

export const Date = styled.div`
  ${tw`text-xs border border-indigo-500 rounded-full px-2`};
  width: fit-content;
`;

export const Point = styled.span`
  ${tw`w-3 h-3 border border-indigo-200 bg-indigo-100 rounded-full absolute`};
  left: -6px;
  top: 20px;
`;
