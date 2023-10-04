import styled from "styled-components";
import Icon from "../ui/Icon";

const Btn = styled.button`
  background-color: var(--color-base-dark-bg-2);
  color: var(--color-white);
  border: 1px solid var(--color-base-dark-line);
  border-radius: 8px;
  padding: 0 0 0 0.875rem;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Select = styled.select`
  background-color: inherit;
  color: inherit;
  border: none;
  border-radius: inherit;
  padding: 0.875rem;
  padding-left: 0;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
`;

export default function Dropdown() {
  return (
    <Btn>
      <Icon>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99976 13.3333C9.80976 13.3333 9.62059 13.2691 9.46643 13.1399L4.46643 8.97328C4.11309 8.67911 4.06476 8.15328 4.35976 7.79995C4.65393 7.44661 5.17893 7.39911 5.53309 7.69328L10.0089 11.4233L14.4773 7.82745C14.8356 7.53911 15.3606 7.59578 15.6489 7.95411C15.9373 8.31245 15.8806 8.83661 15.5223 9.12578L10.5223 13.1491C10.3698 13.2716 10.1848 13.3333 9.99976 13.3333"
            fill="currentColor"
          />
        </svg>
      </Icon>
      <Select>
        <option value="Dine In">Dine In</option>
        <option value="To Go">To Go</option>
        <option value="Delivery">Delivery</option>
      </Select>
    </Btn>
  );
}
