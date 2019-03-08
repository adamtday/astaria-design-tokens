/** @jsx jsx */ jsx;
import { Link as GatsbyLink } from 'gatsby';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { Frontmatter } from '../../types';

type MenuItemProps = Frontmatter & {
  section?: boolean;
  pages?: any;
};

type MenuListProps = {
  title?: string;
  nested?: boolean;
};

type MenuProps = {
  items: [MenuItemProps];
};

/**
 * Styles
 */
const listItem = css({
  display: 'block',
  marginTop: spacing('small'),
});

const listSection = css({
  fontSize: '1.2rem',
  fontWeight: 600,
  color: colors.neutral[20],
});

const Link = styled(GatsbyLink)({
  // @ts-ignore: &[aria-current=page]
  color: colors.neutral[10],
  textDecoration: 'none',
  '&[aria-current=page]': {
    fontWeight: '600',
  },
  '&:hover, &:active, &[aria-current=page]': {
    color: colors.brand,
  },
});

/**
 * Components: Private
 */
const SubMenu = ({ items, title }: MenuListProps & MenuProps) => (
  <li css={listItem}>
    {title && <span css={[listItem, listSection]}>{title}</span>}
    <MenuList nested>
      {items.map(item => (
        <MenuItem key={item.name} route={item.route} name={item.name} />
      ))}
    </MenuList>
  </li>
);

/**
 * Components: Exported
 */
const MenuList = styled.ul(({ nested }: MenuListProps) => ({
  margin: 0,
  marginLeft: nested ? spacing() : 0,
  listStyleType: 'none',
}));

const MenuItem = ({ route, name, section }: MenuItemProps) => (
  <li css={[listItem, section && listSection]}>
    <Link to={route}>{name}</Link>
  </li>
);

const Menu = ({ items }: MenuProps) =>
  items.map(item =>
    item.pages ? (
      <SubMenu key={item.name} title={item.name} items={item.pages} />
    ) : (
      <MenuItem key={item.name} route={item.route} name={item.name} section />
    )
  );

export { MenuItem, Menu, MenuList };