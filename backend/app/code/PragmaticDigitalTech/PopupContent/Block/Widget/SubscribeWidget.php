<?php
/**
 * @category PragmaticDigitalTech
 * @package PragmaticDigitalTech_PopupContent
 * @version 1.0.0
 * @copyright Copyright (c) 2022 PragmaticDigitalTech Company. All Rights Reserved.
 * @license - Copyrighted Commercial Software
 * @author PragmaticDigitalTech Company <contact@pragmaticdigitaltech.com>
 * @link https://pragmaticdigitaltech.com
 */

namespace PragmaticDigitalTech\PopupContent\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;

class SubscribeWidget extends Template implements BlockInterface
{
    protected $_template = "widget/bzo-subscribe.phtml";

    /**
     * Retrieve form action url and set "secure" param to avoid confirm
     * message when we submit form from secure page to unsecure
     *
     * @return string
     */
    public function getFormActionUrl()
    {
        return $this->getUrl('newsletter/subscriber/new', ['_secure' => true]);
    }
}