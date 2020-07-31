/**
 * @flow
 * @file Footer list component
 * @author Box
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../components/button';
import ButtonGroup from '../../components/button-group';
import IconCheck from '../../icons/general/IconCheck';
import IconClose from '../../icons/general/IconClose';
import messages from '../common/messages';
import PrimaryButton from '../../components/primary-button';
import Tooltip from '../common/Tooltip';
import './Footer.scss';

type Props = {
    cancelButtonLabel?: string,
    children?: any,
    chooseButtonLabel?: string,
    hasHitSelectionLimit: boolean,
    isSingleSelect: boolean,
    onCancel: Function,
    onChoose: Function,
    onSelectedClick: Function,
    selectedCount: number,
};

const Footer = ({
    selectedCount,
    onSelectedClick,
    hasHitSelectionLimit,
    isSingleSelect,
    onCancel,
    onChoose,
    chooseButtonLabel,
    cancelButtonLabel,
    children,
}: Props) => (
    <footer className="bcp-footer">
        <div className="bcp-footer-left">
            {!isSingleSelect && selectedCount > 0 && (
                <Button className="bcp-selected" onClick={onSelectedClick} type="button">
                    <FormattedMessage
                        className="bcp-selected-count"
                        {...messages.selected}
                        values={{ count: selectedCount }}
                    />
                    {hasHitSelectionLimit && (
                        <span className="bcp-selected-max">
                            (<FormattedMessage {...messages.max} />)
                        </span>
                    )}
                </Button>
            )}
        </div>
        <div className="bcp-footer-right">
            {selectedCount > 0 && (
                <ButtonGroup>
                    <Button onClick={onCancel} type="button">
                        Cancel
                    </Button>
                    <PrimaryButton onClick={onChoose} type="button">
                        Download
                    </PrimaryButton>
                </ButtonGroup>
            )}
        </div>
    </footer>
);

export default Footer;
